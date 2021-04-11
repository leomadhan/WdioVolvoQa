const Safetypage = require('../pageobjects/safetylearnmore.page');


describe('wdio-image-comparison-service desktop', () => {
    beforeEach(() => {
        Safetypage.open();
        Safetypage.handlingCookieAlert();  
        Safetypage.redirectToDetails(); 
        Safetypage.introVid;
        browser.waitUntil(function () {
            const state = browser.execute(function () {
              return document.readyState;
            });        
            return state === 'complete';
          },
          {
            timeout: 60000, //60secs
            timeoutMsg: 'Oops! Check your internet connection'
          }); 
    });
    
    afterEach(() => browser.execute('window.scrollTo(0, 0);', []));

    


    describe('compare element', () => {
        /*it('should compare successful with a baseline', () => {
            expect(browser.checkElement(Safetypage.introVid, 'VideoButtonElement')).toEqual(0);            
        });*/

        it('should save the compare element screenshot', () => {
            const firstButtonElement = 'firstButtonElement';
            const { fileName, path } = browser.saveElement($('.uk-button:nth-child(1)'), firstButtonElement);
    
            copy(normalize(`${ path }/${ fileName }`), join(process.cwd(), `./${ localBaseline }/${ path.split('/').pop() }/${ fileName }`));
            copy(
                normalize(`${ path }/${ fileName }`),
                join(
                    process.cwd(),
                    `./${ localBaseline }/${ checkBaseline }/${ path.split('/').pop() }/${ fileName.replace(firstButtonElement, 'elementCheckFolders') }`
                ),
            );
        });
    });

    describe('compare fullpage', () => {
        it('should compare successful with a baseline', () => {
            expect(browser.checkFullPageScreen('fullPage', { fullPageScrollTimeout: '1500' })).toEqual(0);
        });
    });

    describe('compare tabbable', () => {
        it('should compare successful with a baseline', () => {
            expect(browser.checkTabbablePage('tabbable')).toEqual(0);
        });
    });
});