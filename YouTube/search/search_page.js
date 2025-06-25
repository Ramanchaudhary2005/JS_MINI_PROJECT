const searchQuery = window.location.search;
// console.log(searchQuery);

const queryArray = searchQuery.split("=");
const endodedsearchText = decodeURI(queryArray[1]);
const rootelement = document.getElementById("search-cards-container");



const getSearchResult = () =>{
    // const request = fetch(`https://youtube138.p.rapidapi.com/search/?q=${endodedsearchText}&hl=en&gl=US`,{
    //     method: "GET",
    //     headers:{
    //         "x-rapidapi-host":"youtube138.p.rapidapi.com",
    //         "x-rapidapi-key":"6c128dff43msha80942be91022bap101cc3jsn508cc8d30ac6"
    //     },
    // });  

    // request.then((response)=>{
    //     const pr2 = response.json();
    //     pr2.then((data)=>{
    //         renderSearchResult(data);
    //     })
    // }).catch((err)=>{
    //     alert("Failed to get results:", err.message);
    // });
    renderSearchResult();
};

const renderSearchResult=(data)=>{
    const dummyData = {
    "contents": [
        {
            "channel": {
                "avatar": [
                    {
                        "height": 88,
                        "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s88-c-k-c0x00ffffff-no-rj-mo",
                        "width": 88
                    },
                    {
                        "height": 176,
                        "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s176-c-k-c0x00ffffff-no-rj-mo",
                        "width": 176
                    }
                ],
                "badges": [
                    {
                        "text": "Verified",
                        "type": "VERIFIED_CHANNEL"
                    }
                ],
                "canonicalBaseUrl": "/@PowerRangersOfficial",
                "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                "descriptionSnippet": "GO GO POWER RANGERS! Welcome to Power Rangers Official, a page dedicated to all Power Rangers super fans!!! With new ...",
                "stats": {
                    "subscribers": 10800000,
                    "subscribersText": "10.8M subscribers"
                },
                "title": "Power Rangers Official",
                "username": "@PowerRangersOfficial"
            },
            "type": "channel"
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Wild Force | LIVE | Full Season | Power Rangers ...",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 42
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/x-jPLxc5g8o/hq720.jpg?v=685ae552&sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8ibwmz7OKdxxXpQsu7xCj-GXgLQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/x-jPLxc5g8o/hq720.jpg?v=685ae552&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1MS8D-845rlBAbYwlLFxnCYxDbA",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Wild Force 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "x-jPLxc5g8o"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Dino Super Charge Full Episodes streaming 24/7.",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 13
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/pQiYQl5M_mU/hq720.jpg?v=685ae553&sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0Crv55H7Wzp1MDbhFyECiU5tGdQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/pQiYQl5M_mU/hq720.jpg?v=685ae553&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFcZMJmF_X32TBXt7iVBCAQfnnug",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Best Episodes ⚡ Turbo to Wild Force 🔴 LIVE 24/7 🌟 Power Rangers Official",
                "videoId": "pQiYQl5M_mU"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Dino Super Charge Full Episodes streaming 24/7.",
                "isLiveNow": false,
                "lengthSeconds": 42900,
                "movingThumbnails": null,
                "publishedTimeText": "Streamed 10 hours ago",
                "stats": {
                    "views": 4263
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/vFKSjjqLwZc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIo-p8Yw_ZH4F2UDFoLW61JvJKmQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/vFKSjjqLwZc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZZFINvom3F6Qnc9CUXSs57F_iaQ",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Best Episodes ⚡ Turbo to Wild Force 🔴 LIVE 24/7 🌟 Power Rangers Official",
                "videoId": "vFKSjjqLwZc"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Wild Force | LIVE | Full Season | Power Rangers ...",
                "isLiveNow": false,
                "lengthSeconds": 42898,
                "movingThumbnails": null,
                "publishedTimeText": "Streamed 10 hours ago",
                "stats": {
                    "views": 8098
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/dUcDKPbkFk4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC1KDcXa3QaNQO9b4iZCEzKfKuGQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/dUcDKPbkFk4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuuPplqbmKxHoIhYzVOfa04GfUeg",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Wild Force 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "dUcDKPbkFk4"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Megaforce & Super Megaforce The Complete Story LIVE 24/7 ...",
                "isLiveNow": false,
                "lengthSeconds": 42899,
                "movingThumbnails": null,
                "publishedTimeText": "Streamed 12 hours ago",
                "stats": {
                    "views": 8878
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/cMAAVshjoU4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhrhwUh1xrVTimTT8GSZ89Gm_kfg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/cMAAVshjoU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD19QULENMgWevaATL1p-SsFEPeLA",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Megaforce & Super Megaforce 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "cMAAVshjoU4"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Megaforce & Super Megaforce The Complete Story LIVE 24/7 ...",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 42
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/JQkGD8RLPhA/hq720.jpg?v=685ac955&sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf1NrHF2Rl6LgsfN0CfgZbl8KE6w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/JQkGD8RLPhA/hq720.jpg?v=685ac955&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCG0bqUzVaH4mqifmI6fg29kxqV1w",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Megaforce & Super Megaforce 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "JQkGD8RLPhA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Re-Ignition | Full Episodes 1 to 10 | Mini Movie ...",
                "isLiveNow": false,
                "lengthSeconds": 12415,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/xoD7wSR9IU8/mqdefault_6s.webp?du=3000&sqp=CNrw7cIG&rs=AOn4CLBKCbyPJR1t56_k_NT7nGvhgKXgEQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "16 hours ago",
                "stats": {
                    "views": 3810
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/xoD7wSR9IU8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUsVs9e9s94wEhENlNRcPStSmkTg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/xoD7wSR9IU8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbuR78WP6qvX9Ko7Mefc_rN-OCLg",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Re-Ignition | Full Episodes 1 to 10 | Mini Movie | Mighty Morphin Power Rangers",
                "videoId": "xoD7wSR9IU8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Wild Force | LIVE | Full Season | Power Rangers ...",
                "isLiveNow": false,
                "lengthSeconds": 42896,
                "movingThumbnails": null,
                "publishedTimeText": "Streamed 1 day ago",
                "stats": {
                    "views": 5083
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/IoFMOpEVdCI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm69FAT0LStjIj6OtWNHAR5LMBxg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/IoFMOpEVdCI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_wMXJyfnJ65ujsv0B35wR-pcoSg",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Wild Force 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "IoFMOpEVdCI"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Dino Super Charge Full Episodes streaming 24/7.",
                "isLiveNow": false,
                "lengthSeconds": 42896,
                "movingThumbnails": null,
                "publishedTimeText": "Streamed 1 day ago",
                "stats": {
                    "views": 8004
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/H4n1URHSnJU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8UIlaFl2Ql2NVrLSpTknf44B-QA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/H4n1URHSnJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSW9UtU68n1BPPf_vIf8js2UNdDQ",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Best Episodes ⚡ Turbo to Wild Force 🔴 LIVE 24/7 🌟 Power Rangers Official",
                "videoId": "H4n1URHSnJU"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Megaforce & Super Megaforce The Complete Story LIVE 24/7 ...",
                "isLiveNow": false,
                "lengthSeconds": 42901,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/uYFLKaImDfE/mqdefault_6s.webp?du=3000&sqp=CJP67cIG&rs=AOn4CLBzY2PKMTFthxIY1fMqYbzIenW2wA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "Streamed 1 day ago",
                "stats": {
                    "views": 15142
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/uYFLKaImDfE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCi3MqAOESFgo0uwOhTukTOuKOAGw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/uYFLKaImDfE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdmxhuxRNuYdyQHreoPksEfdcvtw",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Megaforce & Super Megaforce 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "uYFLKaImDfE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Megaforce & Super Megaforce The Complete Story LIVE 24/7 ...",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 42
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/JQkGD8RLPhA/hq720.jpg?v=685ac955&sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf1NrHF2Rl6LgsfN0CfgZbl8KE6w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/JQkGD8RLPhA/hq720.jpg?v=685ac955&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCG0bqUzVaH4mqifmI6fg29kxqV1w",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Megaforce & Super Megaforce 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "JQkGD8RLPhA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [],
                "descriptionSnippet": "All new season of Power Rangers Dino Fury airs every Saturday on Nickelodeon! Mighty Morphin Power Rangers | Season 1 ...",
                "isLiveNow": false,
                "lengthSeconds": 11666,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/Q4ki1PqpsVs/mqdefault_6s.webp?du=3000&sqp=CLby7cIG&rs=AOn4CLBtStXFx6uqEZmIrktKNMXD4zjOdg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "11 months ago",
                "stats": {
                    "views": 1301981
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/Q4ki1PqpsVs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOStflTPRUuZFLBfwKeMlmEgp9JA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/Q4ki1PqpsVs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRf3-5Ms8lkxhkshNm6tL2KzSuzw",
                        "width": 720
                    }
                ],
                "title": "Mighty Morphin Power Rangers | Season 1 | Full Episodes 1 to 10 | Mini Movie | Power Rangers Videos",
                "videoId": "Q4ki1PqpsVs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [],
                "descriptionSnippet": "All new season of Power Rangers Dino Fury airs every Saturday on Nickelodeon! A New Zord? | Power Rangers Super Dino ...",
                "isLiveNow": false,
                "lengthSeconds": 7074,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/GCwxtl6SB0g/mqdefault_6s.webp?du=3000&sqp=CPDR7cIG&rs=AOn4CLAtFJ5_1X8HWkK-Yo3qj2oozUfPjg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 months ago",
                "stats": {
                    "views": 649472
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/GCwxtl6SB0g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClpw7GV_vJJaShMsXGi6z75DTkBw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/GCwxtl6SB0g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_LtimRmcFtjLJlcobrR2yiAEFzg",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Dino Super Charge | Full Episodes 18 to 22 | Mini Movie | Power Rangers Videos",
                "videoId": "GCwxtl6SB0g"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [],
                "descriptionSnippet": "All new season of Power Rangers Dino Fury airs every Saturday on Nickelodeon! Red Ranger Charged! | Power Rangers Dino ...",
                "isLiveNow": false,
                "lengthSeconds": 15562,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/lNOUYtcU1aE/mqdefault_6s.webp?du=3000&sqp=CLjs7cIG&rs=AOn4CLDTteWBq3Tc60OKf2RCRdPSnOKupQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 1730755
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/lNOUYtcU1aE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXNdTe79C_XW1QvKyEFpnzUECvvw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/lNOUYtcU1aE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOMo7MMO_IPwCrsIHcHgKdNTsEbA",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Dino Charge | Full Episodes 1 to 11 | Mini Movie | Action | Power Rangers",
                "videoId": "lNOUYtcU1aE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/GJPVdw4b73whMqJQjp45jpZDWrTAbszCUX0oCmahpad5GzDx48BXpVMqpRcFYogKickjtCJwTw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersKidsOfficial",
                    "channelId": "UCbIm2iqwql8bFqkO2bHv7Mw",
                    "title": "Power Rangers Kids - Official Channel"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "For more Power Rangers Kids: https://bit.ly/PRKIDSUB Power Rangers Dino Super Charge | Best Moments LIVE 24/7 ⚡ Power ...",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 10
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/GaU8aK83dCE/hq720.jpg?v=685b5cdb&sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAA3sdjh3jCNB--bhTj-iNoYxsH1Q",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/GaU8aK83dCE/hq720.jpg?v=685b5cdb&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnBdhPxZVytzKfcFJ1a4iLXg9i5g",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Dino Super Charge | Best Moments 🔴 LIVE 24/7 ⚡ Power Rangers Kids | Action For Kids",
                "videoId": "GaU8aK83dCE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for More Power Rangers: http://bit.ly/PROfficialSUB Power Rangers Wild Force | LIVE | Full Season | Power Rangers ...",
                "isLiveNow": false,
                "lengthSeconds": 42898,
                "movingThumbnails": null,
                "publishedTimeText": "Streamed 10 hours ago",
                "stats": {
                    "views": 8098
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/dUcDKPbkFk4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC1KDcXa3QaNQO9b4iZCEzKfKuGQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/dUcDKPbkFk4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuuPplqbmKxHoIhYzVOfa04GfUeg",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Wild Force 🔴 LIVE 24/7 | Power Rangers Official",
                "videoId": "dUcDKPbkFk4"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [],
                "descriptionSnippet": "Power Rangers Dino Fury | Seasons 1 and 2 Recap | Mini Movie | Power Rangers Videos #PowerRangers #GoGoPowerRangers ...",
                "isLiveNow": false,
                "lengthSeconds": 1847,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/9C2nGcKaUkc/mqdefault_6s.webp?du=3000&sqp=CPvW7cIG&rs=AOn4CLDkwfWoX2mQtDjMgFNusEyVwoNj0w",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 145129
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/9C2nGcKaUkc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHsuWYYKFtXxkDky3l9hzw7_vjRQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/9C2nGcKaUkc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4xS2sli9NN506K0fnNBUZn1TiUg",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Dino Fury | Seasons 1 and 2 Recap | Mini Movie | Power Rangers Videos",
                "videoId": "9C2nGcKaUkc"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kq7z9RapLdnSymMLH6lWlj2LJ07bXcfcnNmPw7A31rP8Q=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@NinjaKidz",
                    "channelId": "UCpZ88DWlKW0H_AYDaUZptcw",
                    "title": "Ninja Kidz TV"
                },
                "badges": [],
                "descriptionSnippet": "Power Rangers Season 2 Movie Remastered! This is the 5th and 6th episode of the series. Episode 7 and 8 are coming soon.",
                "isLiveNow": false,
                "lengthSeconds": 2528,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/Mox6yaKqqX8/mqdefault_6s.webp?du=3000&sqp=CIjp7cIG&rs=AOn4CLBeBd-m0tvdJhMppqlk4oObHde8rw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 years ago",
                "stats": {
                    "views": 133719348
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/Mox6yaKqqX8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfZWR66FZN8UkQ9d-Q5uzi1IDzuA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/Mox6yaKqqX8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmhbaEDLXRUvk2-cMtXTcoXNgJwA",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Ninja Z Movie 2 Remastered!",
                "videoId": "Mox6yaKqqX8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_muyoW3r9pQofQAbL9N_UIkEWlhATFBZ19S8WMXjDQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@powerrangersbrasil9802",
                    "channelId": "UCm3cvduc0fVCN3EwYO-DndA",
                    "title": "PowerRangers Brasil"
                },
                "badges": [],
                "descriptionSnippet": "Vamos Power Rangers - Ricardo Silva Gravação de som 2:26 - 3:55 play match ...",
                "isLiveNow": false,
                "lengthSeconds": 241,
                "movingThumbnails": null,
                "publishedTimeText": "9 years ago",
                "stats": {
                    "views": 23330029
                },
                "thumbnails": [
                    {
                        "height": 270,
                        "url": "https://i.ytimg.com/vi/BwbHW8MeHDU/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB3gOAAugCigIMCAAQARguIGUoITAP&rs=AOn4CLDQHuHILWGz3_4C7l1Kb_qkua46_A",
                        "width": 480
                    }
                ],
                "title": "Mighty Morphin Power Rangers Full Theme Song",
                "videoId": "BwbHW8MeHDU"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/Pf0Rqkt6IUlNnr1L4vxZw3boJyNvkuGeO3hPHr7GqEedStiGUnVkIT9FrSktsB883iirj4nENVA=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ChrisCantadaForce",
                    "channelId": "UCiThCkZxKWX3BYrjHXO-_Rg",
                    "title": "Chris Cantada Force"
                },
                "badges": [],
                "descriptionSnippet": "We need Red Ranger Power, now! Dino Thunder Red – Patrick Brady SPD Red – Allan Chin Dekaranger – Eduardo Silva Magi ...",
                "isLiveNow": false,
                "lengthSeconds": 83,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/8mgt1GC0kLM/mqdefault_6s.webp?du=3000&sqp=CL_n7cIG&rs=AOn4CLChiUhICweVkLFyMUeyT3Uag4LucA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 8005676
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/8mgt1GC0kLM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_X9HwFU6sAy2YQxOCIposppf8Zw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/8mgt1GC0kLM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqR3Dwp9Vg_yMPULysOQHqDj9AQQ",
                        "width": 720
                    }
                ],
                "title": "FOREVER RED Vol. 2 | Power Rangers x Super Sentai Cosplay",
                "videoId": "8mgt1GC0kLM"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [],
                "descriptionSnippet": "Power Rangers Beast Morphers | Season 1 and 2 Recap | Mini Movie | Power Rangers Videos #PowerRangers ...",
                "isLiveNow": false,
                "lengthSeconds": 2144,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/PzGGn_48zC8/mqdefault_6s.webp?du=3000&sqp=CMj57cIG&rs=AOn4CLAcHg6diA_69cbhtloCTZCNqyscng",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 2695358
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/PzGGn_48zC8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCzQRrwqr6H_V2KcwnuqCtCiLe9A",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/PzGGn_48zC8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjKDwx74IT1IhP_YfOhQVLZXpgiw",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Beast Morphers | Seasons 1 and 2 Recap | Mini Movie | Power Rangers Videos",
                "videoId": "PzGGn_48zC8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lxd6zDxmPPNyGt-kDy-2unAAkLK8V1Da6jRQtH_dO9His=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@ObjectivistGuitarist",
                    "channelId": "UCllRLLo4SVersEQ98qp9m_A",
                    "title": "Objectivist Guitarist"
                },
                "badges": [],
                "descriptionSnippet": "Please enjoy, share and subscribe for more.",
                "isLiveNow": false,
                "lengthSeconds": 309,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/_X9ZvPnbBfE/mqdefault_6s.webp?du=3000&sqp=CNbn7cIG&rs=AOn4CLCmKFMVKL-E6cEc4em74ltUHQS5tg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "8 years ago",
                "stats": {
                    "views": 6501872
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/_X9ZvPnbBfE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmAUYrl8IY03CTrfXf27zlyLwrkQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/_X9ZvPnbBfE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhJqmFlcoN0clmTgj6szZKD5gwBw",
                        "width": 720
                    }
                ],
                "title": "Mighty Morphin Power Rangers theme song - Epic instrumental cover",
                "videoId": "_X9ZvPnbBfE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/GJPVdw4b73whMqJQjp45jpZDWrTAbszCUX0oCmahpad5GzDx48BXpVMqpRcFYogKickjtCJwTw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersKidsOfficial",
                    "channelId": "UCbIm2iqwql8bFqkO2bHv7Mw",
                    "title": "Power Rangers Kids - Official Channel"
                },
                "badges": [],
                "descriptionSnippet": "New Episodes of Dino Fury are available on Netflix! The Rangers Are Captured! Dino Fury Season 2 ⚡ Power Rangers Kids ...",
                "isLiveNow": false,
                "lengthSeconds": 1214,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/YvWMoTXd590/mqdefault_6s.webp?du=3000&sqp=CPnH7cIG&rs=AOn4CLDlb-ariIyMl12MOnk4FHOke5RTjA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 3070959
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/YvWMoTXd590/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPsWfXULyxnY0Z-1pmd_B9oopImA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/YvWMoTXd590/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2fUMWS5yfc8TGzWbh-H33qQfE7Q",
                        "width": 720
                    }
                ],
                "title": "The Rangers Are Captured! 🦖 Dino Fury Season 2 ⚡ Power Rangers Kids ⚡ Action for Kids",
                "videoId": "YvWMoTXd590"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [],
                "descriptionSnippet": "Welcome to Power Rangers Official, a page dedicated to all Power Rangers super fans! With new content uploaded weekly, get ...",
                "isLiveNow": false,
                "lengthSeconds": 8488,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/84m7ltdll_A/mqdefault_6s.webp?du=3000&sqp=CIDS7cIG&rs=AOn4CLCrRmjbZYyNltUQxO1HUMxRvp5svA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "7 months ago",
                "stats": {
                    "views": 796592
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/84m7ltdll_A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQymNk9Pnj5t4mh3c-0__dTnS2hw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/84m7ltdll_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7eAIQEGB11CFy7d_cPzU0SqLAaA",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Dino Super Charge | Full Episodes 7 to 12 | Mini Movie | Action | Power Rangers Videos",
                "videoId": "84m7ltdll_A"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/6rU4iDPSpoayWcG_2JQZ9f4OV6BzmLByi8cql9sV_oICiEWyz91iQWoTmyr2QikOOkbjhVN1=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PowerRangersOfficial",
                    "channelId": "UCpgxmlXoDtkYzRQ4cJgCT5A",
                    "title": "Power Rangers Official"
                },
                "badges": [],
                "descriptionSnippet": "Shell Shocked | In Space | Full Episode | S06 | E04 | Power Rangers Official The Space Rangers meet the Teenage Mutant Ninja ...",
                "isLiveNow": false,
                "lengthSeconds": 3750,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/5xenmx8E-m0/mqdefault_6s.webp?du=3000&sqp=CJjs7cIG&rs=AOn4CLAI1ubYJGaRsSLKeKJ2ryrBSUoK8Q",
                        "width": 320
                    }
                ],
                "publishedTimeText": "6 months ago",
                "stats": {
                    "views": 544876
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/5xenmx8E-m0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJAR7ZuHCGxd1YWlXfj8ATcqivOg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/5xenmx8E-m0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC37nIhYETLTqHyx5-L_GkYq88LDQ",
                        "width": 720
                    }
                ],
                "title": "Power Rangers & Teenage Mutant Ninja Turtles Team Up! | Full Episodes | Power Rangers Videos",
                "videoId": "5xenmx8E-m0"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/-M47Unf34obHv-sPaecIL_mY_pkLSizsyeMBn9GVRY-45ej1V1VYEKgUx26Bf5_yB3a2s-fB=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@Stickasaurus",
                    "channelId": "UCMIgGVJss6x19RiLKzf1doQ",
                    "title": "Stickasaurus"
                },
                "badges": [],
                "descriptionSnippet": null,
                "isLiveNow": false,
                "lengthSeconds": 23,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/XZRz0rIuSdg/mqdefault_6s.webp?du=3000&sqp=CJjm7cIG&rs=AOn4CLCRanbL5VDpRDU3cW8nAy5vlj4DwQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 162735
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/XZRz0rIuSdg/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIFYoTTAP&rs=AOn4CLDWCmPOZcjfuOSJroQmTlXgcj6Xrg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/XZRz0rIuSdg/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIFYoTTAP&rs=AOn4CLDCEiBOiSDQy96L0R0oETvTRXmWKg",
                        "width": 720
                    }
                ],
                "title": "Power Rangers Dino Charge Pink #powerrangers #sentai #toys #cosplay #supersentai #3dprinting",
                "videoId": "XZRz0rIuSdg"
            }
        }
    ],
    "cursorNext": "EpAEEg1wb3dlciByYW5nZXJzGv4DU0JTQ0FSaFZRM0JuZUcxc1dHOUVkR3RaZWxKUk5HTktaME5VTlVHQ0FRdEtVV3RIUkRoU1RGQm9RWUlCQzFFMGEya3hVSEZ3YzFaemdnRUxSME4zZUhSc05sTkNNR2VDQVF0c1RrOVZXWFJqVlRGaFJZSUJJbEJNWW5Rd09YUlhjV1Z3UWxSdmNVazRkRmhzTjAxaVpVVllORU5rYTA1NFRGT0NBUXRIWVZVNFlVczRNMlJEUllJQkMyUlZZMFJMVUdKclJtczBnZ0VMT1VNeWJrZGpTMkZWYTJPQ0FRdE5iM2cyZVdGTGNYRllPSUlCSWxCTVluUXdPWFJYY1dWd1FsTm9hVkZmUzNsMFpUaDNiSEZhTldkUFpYaHVkbXFDQVF0Q2QySklWemhOWlVoRVZZSUJDemh0WjNReFIwTXdhMHhOZ2dFaVVFeFFXak5GUjJKNlExWlJTMUZ5ZDNCTVUxYzBWUzFMWTNkdmFYRTFNREZaWklJQkMxQjZSMGR1WHpRNGVrTTRnZ0VMWDFnNVduWlFibUpDWmtXQ0FRdFpkbGROYjFSWVpEVTVNSUlCQ3pnMGJUZHNkR1JzYkY5QmdnRUxOWGhsYm0xNE9FVXRiVENDQVF0WVdsSjZNSEpKZFZOa1o3SUJCZ29FQ0JnUUF1b0JCQWdDRUNJJTNEGIHg6BgiC3NlYXJjaC1mZWVk",
    "didYouMean": null,
    "estimatedResults": 13467319,
    "filterGroups": [
        {
            "filters": [
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSUlBUSUzRCUzRA==",
                    "label": "Last hour",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSUlBZyUzRCUzRA==",
                    "label": "Today",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSUlBdyUzRCUzRA==",
                    "label": "This week",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSUlCQSUzRCUzRA==",
                    "label": "This month",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSUlCUSUzRCUzRA==",
                    "label": "This year",
                    "selected": false
                }
            ],
            "title": "Upload date"
        },
        {
            "filters": [
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSVFBUSUzRCUzRA==",
                    "label": "Video",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSVFBZyUzRCUzRA==",
                    "label": "Channel",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSVFBdyUzRCUzRA==",
                    "label": "Playlist",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSVFCQSUzRCUzRA==",
                    "label": "Movie",
                    "selected": false
                }
            ],
            "title": "Type"
        },
        {
            "filters": [
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSVlBUSUzRCUzRA==",
                    "label": "Under 4 minutes",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSVlBdyUzRCUzRA==",
                    "label": "4 - 20 minutes",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSVlBZyUzRCUzRA==",
                    "label": "Over 20 minutes",
                    "selected": false
                }
            ],
            "title": "Duration"
        },
        {
            "filters": [
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSkFBUSUzRCUzRA==",
                    "label": "Live",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSndBUSUzRCUzRA==",
                    "label": "4K",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSWdBUSUzRCUzRA==",
                    "label": "HD",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSW9BUSUzRCUzRA==",
                    "label": "Subtitles/CC",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSXdBUSUzRCUzRA==",
                    "label": "Creative Commons",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSjRBUSUzRCUzRA==",
                    "label": "360°",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnUFFBUUUlM0Q=",
                    "label": "VR180",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSTRBUSUzRCUzRA==",
                    "label": "3D",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnUElBUUUlM0Q=",
                    "label": "HDR",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnTzRBUUUlM0Q=",
                    "label": "Location",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkVnSklBUSUzRCUzRA==",
                    "label": "Purchased",
                    "selected": false
                }
            ],
            "title": "Features"
        },
        {
            "filters": [
                {
                    "cursorSelect": null,
                    "label": "Relevance",
                    "selected": true
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkNBSSUzRA==",
                    "label": "Upload date",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkNBTSUzRA==",
                    "label": "View count",
                    "selected": false
                },
                {
                    "cursorSelect": "cG93ZXIgcmFuZ2VycyYmJkNBRSUzRA==",
                    "label": "Rating",
                    "selected": false
                }
            ],
            "title": "Sort by"
        }
    ],
    "refinements": [
        "mighty morphin power rangers season 2",
        "power rangers dino fury",
        "power rangers kids",
        "power rangers toys",
        "power rangers zeo",
        "power rangers samurai",
        "power rangers megaforce",
        "power rangers season 1",
        "power rangers dino charge",
        "power rangers jungle fury",
        "power rangers wild force",
        "power rangers dino thunder",
        "power rangers spd"
    ]
    };
    // ...existing code...
    const {contents} = dummyData;
    contents.forEach((obj)=>{
        if (!obj.video) return; // Skip if not a video result
        const {thumbnails, title, descriptionSnippet, publishedTimeText, stats} = obj.video;
        const newDiv = document.createElement("div");
        newDiv.className = "search-result-video-card";

        newDiv.innerHTML=`
            <div class="thumbnail-container">
                <img src='${thumbnails && thumbnails.length ? thumbnails[thumbnails.length-1].url : ""}' width="100%">
            </div>
            <div class="video-data-container">
                <p>${title}</p>
                <p>${stats && stats.views ? stats.views : ""}</p>
                <p>${publishedTimeText ? publishedTimeText : ""}</p>
                <p>${descriptionSnippet ? descriptionSnippet : ""}</p>
            </div>        
        `;
        rootelement.append(newDiv);
    });
};

getSearchResult();
