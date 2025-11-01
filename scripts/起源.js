const CoreFrontline = extend(CoreBlock, "起源", {
	canBreak(tile) {
		return Vars.state.teams.cores(tile.team()).size > 1;
	},
	canReplace(other) {
		return other.alwaysReplace;
	},
	canPlaceOn(tile, team, rotation) {
		return Vars.state.teams.cores(team).size < 7;//备注这个数字代表最大能放几个这样的核心()
	}
});