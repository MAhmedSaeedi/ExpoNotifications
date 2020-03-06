const { manifest } = Expo.Constants;
const prodProtocolHostPort = "https://xxx.stevemu.com";
const serverProtocolHostPort = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
? "http://" + manifest.debuggerHost.split(`:`).shift().concat(`:5010`)
: prodProtocolHostPort;
export const getPushTokenEndpoint = () => {
let url = `${serverProtocolHostPort}/api/push_notification/push_token`;
// console.log(url);
return url;
}
export function getEventsEndpoint() {
let url = `${serverProtocolHostPort}/api/events`;
// console.log(url);
return url;
}