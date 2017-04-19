let typescript = require('rollup-plugin-typescript');

module.exports = function(config) {

  const configuration = {
    basePath: '',
    preprocessors: {
      '**/*.ts': ['rollup']
    },
    rollupPreprocessor: {
      external: [
        'jasmine'
      ],
			plugins: [
        typescript({
          typescript: require('typescript')
        }),
				require('rollup-plugin-buble')()
			],
			format: 'iife',
			moduleName: 'BinarySearchTree',
			sourceMap: 'inline'
		},
    frameworks: ['jasmine'],
    exclude: [],
    client: {
      captureConsole: false
    },
    files: [
      { pattern: './test/**/*.test.[t|j]s'}
    ],
    port: 9876,
    colors: true,
    /*
    * level of logging
    * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    */
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: [
      'Firefox'
    ],
    autoWatch: true,
    singleRun: false
  };

  config.set(configuration);
}
