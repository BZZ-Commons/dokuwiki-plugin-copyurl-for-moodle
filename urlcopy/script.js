/**
 * Moodle Link Button plugin script
 *
 * @copyright (c) 2023 Kevin Maurizi
 * @license GPLv2 or later (https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
 * @author  Kevin Maurizi
 *
 *  Modified from: https://github.com/dregad/dokuwiki-plugin-deletepagebutton
 *
 *   Original license info:
 *
 * @copyright (c) 2020 Damien Regad
 * @license GPLv2 or later (https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
 * @author  Damien Regad
 */
jQuery(function () {

    jQuery('.plugin_urlcopy').click(function (p) {
        p.preventDefault();
        copyModifiedLink();

    });

    function copyModifiedLink() {
        let templateString = '<a class="embededWiki" href="XXX">XXX</a>';
    
        // Get the current URL and remove the jumpmark part
        let currentUrl = window.location.href.split('#')[0];
    
        // Replace all occurrences of 'XXX' with the modified URL
        let modifiedTemplate = templateString.replace(/XXX/g, currentUrl);
    
        // Copy to clipboard using the Clipboard API
        navigator.clipboard.writeText(modifiedTemplate).then(function () {
            displayFadeOutMessage('Link kopiert!', 2000);
        }).catch(function (error) {
            displayFadeOutMessage('Fehler beim Kopieren: ' + error, 2000);
        });
    }

    function displayFadeOutMessage(message, duration) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'success-message';
        messageDiv.innerText = message;
        document.body.appendChild(messageDiv);

        // Add some basic styles. You can move these to a CSS file
        messageDiv.style.position = 'fixed';
        messageDiv.style.bottom = '20px';
        messageDiv.style.right = '20px';
        messageDiv.style.backgroundColor = 'green';
        messageDiv.style.color = 'white';
        messageDiv.style.padding = '15px';
        messageDiv.style.zIndex = '1000';

        setTimeout(function () {
            // Use a basic fade-out effect over 500ms
            messageDiv.style.transition = 'opacity 0.5s';
            messageDiv.style.opacity = '0';
            setTimeout(function () {
                messageDiv.remove();
            }, 500);
        }, duration);
    }

});

