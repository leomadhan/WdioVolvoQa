const Safetypage = require('../pageobjects/safetylearnmore.page');

describe('Volvo cars landing page title validation', () => {
    it('navigate to saftey page', () => {
        Safetypage.open();           
    });   
    it('Get title', () => {
        Safetypage.handlingCookieAlert();        
        Safetypage.redirectToDetails();
        title = browser.getTitle();
    });
    it('Title Validation', () => {
        expect(title).toBe('A million more | Volvo Cars');
        browser.pause(5000);
    })
//});

//describe('check video is playing or not', () => {
    //var originalTimeout;
    //beforeEach(function() {
    //  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    //});
    it('play video and validate pause/play', () => {  
      // Play the video
      Safetypage.clickSafetyVideoToBeplay();
      //Safetypage.verifyVideoPlayPauseAndTimeFrame();
      //Safetypage.verifyVideoPausing();
      //Safetypage.verifyVideoTimeframe();

      browser.switchToFrame(Safetypage.videoIframe) 
      expect(Safetypage.player).toHaveElementClass('playing-mode')      
      expect(Safetypage.playPauseButton).toBeClickable()
      Safetypage.playPauseButton.click()
      expect(Safetypage.player).toHaveElementClass('paused-mode')
      expect(Safetypage.videoTime).toHaveTextContaining('0:0') 
      browser.switchToParentFrame();
      /*const videoIframe = $('#Video-1 iframe')
      browser.switchToFrame(videoIframe) 
      const player = $('#movie_player')  
      // video is playing
      expect(player).toHaveElementClass('playing-mode')  
      // pause video
      const playPauseButton = $('.ytp-play-button')
      expect(playPauseButton).toBeClickable()
      playPauseButton.click()  
      // video is paused
      expect(player).toHaveElementClass('paused-mode')  
      // check current time
      expect($('.ytp-time-current')).toHaveTextContaining('0:0') */ 
    })
    //afterEach(function() {
    //    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    //  });
  })


