<?php

if ( ! class_exists( 'BWF_JSON_Cache' ) ) {
	class BWF_JSON_Cache {

		public static function run_json_endpoints_cache_handling() {
			/** Litespeed cache */
			self::check_litespeed();
		}

		/**
		 * For litespeed cache
		 *
		 * @return void
		 */
		public static function check_litespeed() {
			if ( ! defined( 'LSCWP_V' ) ) {
				return;
			}

			/** Exclude json endpoints */
			$exc_endpoints = get_option( 'litespeed.conf.cache-exc', '' );
			$exc_endpoints = self::make_array( $exc_endpoints );

			if ( defined( 'BWFAN_API_NAMESPACE' ) ) {
				$exc_endpoints[] = "^/wp-json/" . BWFAN_API_NAMESPACE . "/";
			}

			$exc_endpoints[] = "^/wp-json/woofunnels/";
			$exc_endpoints[] = "^/wp-json/funnelkit-automations/";

			$exc_endpoints = self::unique( $exc_endpoints );
			update_option( 'litespeed.conf.cache-exc', wp_json_encode( $exc_endpoints ) );

			/** Exclude role */
			$exc_role = get_option( 'litespeed.conf.cache-exc_roles', '' );
			$exc_role = self::make_array( $exc_role );

			$exc_role[] = "administrator";

			$exc_role = self::unique( $exc_role );
			update_option( 'litespeed.conf.cache-exc_roles', wp_json_encode( $exc_role ) );

			/** Exclude query string */
			$exc_qs = get_option( 'litespeed.conf.cache-exc_qs', '' );
			$exc_qs = self::make_array( $exc_qs );

			$exc_qs[] = "bwfan-track-id";
			$exc_qs[] = "bwfan-track-action";
			$exc_qs[] = "bwfan-link-trigger";

			$exc_qs = self::unique( $exc_qs );
			update_option( 'litespeed.conf.cache-exc_qs', wp_json_encode( $exc_qs ) );
		}

		/**
		 * Convert string/ json to array
		 *
		 * @param $value
		 *
		 * @return array
		 */
		public static function make_array( $value ) {
			$value = self::is_json( $value ) ? json_decode( $value, true ) : $value;

			return empty( $value ) || ! is_array( $value ) ? [] : $value;
		}

		/**
		 * Check if string is a json
		 *
		 * @param $string
		 *
		 * @return bool
		 */
		public static function is_json( $string ) {
			if ( ! is_string( $string ) ) {
				return false;
			}
			json_decode( $string );

			return ( json_last_error() === JSON_ERROR_NONE );
		}

		/**
		 * Array unique and sort
		 *
		 * @param $value
		 *
		 * @return array|mixed
		 */
		public static function unique( $value ) {
			if ( ! is_array( $value ) ) {
				return $value;
			}

			$value = array_unique( $value );
			sort( $value );

			return $value;
		}
	}
}
