<?php
if (!defined('DOKU_INC')) die();

use dokuwiki\plugin\urlcopy\LinkButton;


class action_plugin_urlcopy extends DokuWiki_Action_Plugin {

    public function register(Doku_Event_Handler $controller) {
        $controller->register_hook('MENU_ITEMS_ASSEMBLY', 'AFTER', $this, 'addLinkButton');
    }


     /**
     * Hook for MENU_ITEMS_ASSEMBLY event.
     *
     * Adds 'Moodle Copy Button' button to DokuWiki's PageMenu.
     *
     * @param Doku_Event $event
     */
    public function addLinkButton(Doku_Event $event) {
        array_splice($event->data['items'], -1, 0, array(new LinkButton('Copy Moodle Link')));
    }
}
