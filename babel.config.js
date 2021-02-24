module.exports = {
        "presets": [
            [ 
                "@babel/typescript",
                {
                    modules: false,
                    target: {
                        node: 14,
                    }
                }
            ]
        ],
        env: {
            cjs: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-typescript"
                ]
            }
        },
        "plugins": [
          "@babel/proposal-class-properties",
          "@babel/proposal-object-rest-spread"
        ]
}