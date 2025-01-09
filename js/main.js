'use strict';

(function() {
    function initialize() {
        document.getElementById('offline_indicator').hidden = true;
        document.querySelectorAll('.status')
            .forEach(button => button.addEventListener('click', statusListener));

        window.addEventListener('offline', () => {
            document.getElementById('offline_indicator').hidden = false;
        });
        window.addEventListener('online', () => {
            document.getElementById('offline_indicator').hidden = true;
        });
    }

    function statusListener(e) {
        let elem = document.getElementById('save_time');
        let status = e.target.value;

        fetch('/rest/time', { cache: 'no-store' })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                else {
                    throw response.statusText;
                }
            })
            .then(json => {
                elem.innerText = `${ status } / Server time: ${ json.time }`;
            })
            .catch(reason => {
                elem.innerText = `Error getting date from server '${ reason }'`;
            });
    }

    initialize();
})();