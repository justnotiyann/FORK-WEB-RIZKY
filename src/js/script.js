// Get Component
const menuSongId = document.querySelector('#menu_song_id')
const popSongId = document.querySelector('#pop_song_id')
const popularArtisId = document.querySelector('#popular_artis_id')
const music = new Audio('First Love (Live 2023).mp3');


// Menu Song id

const songs = [
    {
        id: "1",
        songName: `Saikai`,
        poster: "1",
    },
    {
        id: "2",
        songName: `Saikai`,
        poster: "2",
    },
    {
        id: "3",
        songName: `Saikai`,
        poster: "3",
    },
    {
        id: "4",
        songName: `Adamas </div>`,
        poster: "4",
    },
    {
        id: "5",
        songName: `Gurenge (The First Take) </div>`,
        poster: "5",
    },
    {
        id: "6",
        songName: `Yu-Ke </div>`,
        poster: "6",
    },
    {
        id: "7",
        songName: `Isseino Kassai </div>`,
        poster: "7",
    },
    {
        id: "8",
        songName: `Catch The Moment (The First Take) </div>`,
        poster: "8",
    },
    {
        id: "9",
        songName: `ASH </div>`,
        poster: "9",
    },
    {
        id: "10",
        songName: `Thrill,Risk,Heartless </div>`,
        poster: "10",
    },
    {
        id: "11",
        songName: `Surprise </div>`,
        poster: "11",
    },
    {
        id: "12",
        songName: `Adamas (LADYBUG) </div>`,
        poster: "12",
    },
    {
        id: "13",
        songName: `Dawn (LADYBUG) </div>`,
        poster: "13",
    },
    {
        id: "14",
        songName: `Pyschedelic Drive </div>`,
        poster: "14",
    },
    {
        id: "15",
        songName: `Pyschedelic Drive </div>`,
        poster: "15",
    },
]

function renderMenuSongId(id, songName, poster, component) {
    const componentSongItem = `
                    <li class="songItem">
                        <span>01</span>
                        <img src="./src/images/sideMenu/${poster}.jpg">
                        <h5>
                            ${songName}
                        </h5>
                        <i class="bi playListPlay bi-play-circle-fill" id="${id}"></i>
                    </li>
                `

    component.insertAdjacentHTML("afterbegin", componentSongItem)
}

songs.forEach(e => {
    renderMenuSongId(e.id, e.songName, e.poster, menuSongId)
})

// pop_song_id
function renderSideMenu(id, poster, component) {
    const card = `
<li class="songItem">
    <div class="img_play">
        <img src="./src/images/sideMenu/${poster}.jpg">
        <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
    </div>
    <h5>On My Way
        <br>
        <div class="subtitle">Alan Walker</div>
    </h5>
</li>
`
    component.insertAdjacentHTML("afterbegin", card)
}

songs.forEach(e => {
    renderSideMenu(e.id, e.poster, popSongId)
})

// popular_artis_id

function renderPopularArtist(poster, component) {
    const card = `
    <li>
        <a href="/"><img src="./src/images/popularArtis/${poster}.jpg"></a>
    </li>
`
    component.insertAdjacentHTML("afterbegin", card)
}

songs.forEach(e => {
    renderPopularArtist(e.poster, popularArtisId)
})




// Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
//     element.getElementsByTagName('img')[0].src = songs[i].poster;
//     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
// })


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/LISA/${index}.mp3`;
        download_music.href = `audio/LISA/${index}.mp3`;
        poster_master_play.src = `img/LISA/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        // music.addEventListener('ended',()=>{
        //     masterPlay.classList.add('bi-play-fill');
        //     masterPlay.classList.remove('bi-pause-fill');
        //     wave.classList.remove('active2');
        // })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})
const next_music = () => {
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    if (index == songs.length) {
        index == 0;
    }
    index++;
    music.src = `audio/LISA/${index}.mp3`;
    download_music.href = `audio/LISA/${index}.mp3`;
    poster_master_play.src = `img/LISA/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle-fill');
}

const repeat_music = () => {
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index;
    music.src = `audio/LISA/${index}.mp3`;
    download_music.href = `audio/LISA/${index}.mp3`;
    poster_master_play.src = `img/LISA/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle-fill');
}

const random_music = () => {
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    if (index == songs.length) {
        index == 0;
    }
    index = Math.floor((Math.random() * songs.length) + 1);
    music.src = `audio/LISA/${index}.mp3`;
    download_music.href = `audio/LISA/${index}.mp3`;
    poster_master_play.src = `imgLiSA//${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index - 1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index - 1].classList.add('bi-pause-circle-fill');
}
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat";
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random";
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next";
            break;
    }
});
music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
    }
})

// alert(shuffle.innerHTML);

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    download_music.href = `audio/LISA/${index}.mp3`;
    music.src = `audio/LISA/${index}.mp3`;
    poster_master_play.src = `img/LISA/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";

})
next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/LISA/${index}.mp3`;
    download_music.href = `audio/LISA/${index}.mp3`;
    poster_master_play.src = `img/LISA/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";

})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
})
