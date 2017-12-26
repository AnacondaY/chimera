module.exports = {
    setupFiles: [
        './tests/setup.js'
    ],
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/site/'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/assets.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '^.\\.jsx?$': 'babel-jest'
    }
};
