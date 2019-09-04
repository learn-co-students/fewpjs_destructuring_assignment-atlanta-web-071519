const farmAnimals = 'cow horse sheep pig chicken'
let farmAnimalsArray = farmAnimals.split(' ');
const[moo, neigh, baa, oink, cluck] = farmAnimalsArray
const [Bessie, ,Dolly, Babe, Little] = farmAnimalsArray
const [black_and_white, ,black, pink] = farmAnimalsArray

//black_and_white, black, and pink.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const [ red, orange, yellow, green, blue, indigo, violet] = colors
const [ r,o,y,g,b, ,v] = colors
const [ , , , , ,indg] = colors


const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const { name, color, song, job, partner } = muppet

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};


const { song_2, song_4} = k_muppet.k_album.the_muppet_movie
const {k_job, k_partner} = k_muppet

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
