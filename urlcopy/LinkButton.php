<?php

namespace dokuwiki\plugin\urlcopy;
use dokuwiki\Menu\Item\AbstractItem;

/**
 * Class LinkButton
 *
 * Implements the plugin's new button to call the URL copy dialog
 *
 * @package dokuwiki\plugin\urlcopy
 */
class LinkButton extends AbstractItem {

    /** @var string icon file */
    protected $svg = __DIR__ . '/images/moodle.svg';


    /** @inheritdoc */
    public function __construct($label) {
        parent::__construct();
        $this->label = $label;
    }


    public function getLinkAttributes($classprefix = 'menuitem ') {
        $attr = parent::getLinkAttributes($classprefix);
        if (empty($attr['class'])) {
            $attr['class'] = '';
        }
        $attr['class'] .= ' plugin_urlcopy ';
        return $attr;
    }
}