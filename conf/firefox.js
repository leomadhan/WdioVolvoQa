 const config = {   
    hostname: 'geckodriver',
    capabilities: [
      {
        // geckodriver supports no parallel sessions:
        maxInstances: 1,
        browserName: 'firefox',
        'moz:firefoxOptions': {
          //args: ['-headless', '--window-size=1440,900']
        }
      }
    ]
}

exports.config = Object.assign({}, require('./chrome').config, config)