//ex 1

// const StringFormatter = function () {
//     const capitalizeFirst = (str) =>  str[0].toUpperCase() + str[1].toLowerCase() + str.slice(2);
//     const skewerCase = (str) => str.split(" ").join("-");
//     return {
//         capitalizeFirst,
//         skewerCase,
//     };
// };

// const formatter = StringFormatter();
// console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
// console.log(formatter.skewerCase("blue box")); //should print blue-box

//ex 2

// const Bank = function () {
//     let _money = 500;
//     const depositCash = (cash) => (_money += cash);
//     const checkBalance = () => console.log(_money);
//     return {
//         deposit: depositCash,
//         showBalance: checkBalance,
//     };
// };

// const bank = Bank();
// bank.deposit(200);
// bank.deposit(250);
// bank.showBalance(); //should print 950

//ex 3
const YOUTUBE_URL = "https://www.youtube.com/watch?v=";

const SongsManager = function () {
    let _songs = [];
    const addSong = (songName, url) => {
        _songs.push({ [songName]: url.slice(YOUTUBE_URL.length) });
    };
    const getSong = (songName) => {
        for (const song of _songs) {
            if (songName in song) {
                return YOUTUBE_URL + song[songName];
            }
        }
        return YOUTUBE_URL + _songs.songName;
    };
    return {
        addSong,
        getSong,
    };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");
console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
