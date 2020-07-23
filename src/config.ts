export default {
  TwitterToken: process.env.REACT_APP_TwitterToken,
  YoutubeToken: process.env.REACT_APP_YoutubeToken,
  TwitchToken: process.env.REACT_APP_TwitchToken,
  Proxy: 'https://radiant-chamber-62870.herokuapp.com/',
  TwitterEndpoint:
    'https://api.twitter.com/1.1/users/show.json?user_id=827176049553256450',
  InstagramEndpoint: 'https://www.instagram.com/pvpxofficial/?__a=1',
  TwitchEndpoint: 'https://api.twitch.tv/helix/users?id=80781002',
  TwitchStreamEndpoint: 'https://api.twitch.tv/helix/streams?user_id=80781002',
  TwitchVodEndpoint: 'https://api.twitch.tv/helix/videos?user_id=80781002',
  TwitchFollowersEndpoint:
    'https://api.twitch.tv/helix/users/follows?to_id=80781002',
  YoutubeSubsEndpoint:
    'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UChBxzpP9wrwLpw_qsedX7YQ&key=',
};
