function buildTeamColors(teamDataColors) {
    // some of these may be null so remove the null values and make it a proper array of hex codes, append the missing #
    let colors = [teamDataColors.PrimaryColor, teamDataColors.SecondaryColor, teamDataColors.TertiaryColor, teamDataColors.QuaternaryColor];
    return colors.filter(c => c).map(c => '#'+c);
}