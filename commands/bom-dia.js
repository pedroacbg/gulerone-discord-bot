const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bom-dia")
    .setDescription("Responde com '?????'"),

  async execute(interaction) {
    await interaction.reply("🥰 Ohayo, Onni-chan daisuki! 🥰");
  },
};
