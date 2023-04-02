const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
  .setColor(0x9d4383)
  .setTitle("Coisas de anime para alegrar seu dia")
  .setDescription("Você irá ver algo incrível")
  .setTimestamp()
  .setFooter({
    text: "Eu sei que você gosta",
    iconURL:
      "https://static.wikia.nocookie.net/my-brother-is-done-for/images/d/d0/MahiroEX.jpg/revision/latest/scale-to-width-down/300?cb=20210226184246",
  });

const categories = [
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
  "waifu",
  "neko",
  "shnobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
];

let randomPercent = Math.floor(Math.random() * categories.length);
let randomCategory = categories[randomPercent];

const animeImage = function () {
  fetch(`https://api.waifu.pics/sfw/${randomCategory}`)
    .then((response) => response.json())
    .then((data) => {
      exampleEmbed.setImage(data.url);
    });
};
animeImage();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anime")
    .setDescription("Responde com algumas fotos"),

  async execute(interaction) {
    animeImage();
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
