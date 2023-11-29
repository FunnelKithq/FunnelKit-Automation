<?php

/**
 * Spam protection, AntiSpam, FireWall by CleanTalk
 * https://wordpress.org/plugins/cleantalk-spam-protect/
 */
if ( ! class_exists( 'BWFAN_Compatibility_With_AntiSpam' ) ) {
	class BWFAN_Compatibility_With_AntiSpam {
		public function __construct() {
			global $apbct;
			if ( isset( $apbct->settings ) && isset( $apbct->settings['forms__general_contact_forms_test'] ) ) {
				$apbct->settings['forms__general_contact_forms_test'] = 0;
			}
		}
	}

	if ( defined( 'APBCT_VERSION' ) ) {
		new BWFAN_Compatibility_With_AntiSpam();
	}
}
