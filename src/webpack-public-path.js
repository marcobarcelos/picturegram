// Dynamically set the webpack public path at runtime below.
// This global is used by webpack to set the public path at runtime.
// The public path is set dynamically to avoid issues with external resources.
// Documentation: https://webpack.js.org/configuration/output/#output-publicpath
// eslint-disable-next-line no-undef,camelcase
__webpack_public_path__ = `${window.location.protocol}//${window.location.host}/`;
