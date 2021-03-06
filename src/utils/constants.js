export const PlayingStatus = Object.freeze({
  Null: 0,
  Listening: 1,
  Playing: 2,
  Watching: 8,
  Editing: 16,
  ResultsScreen: 32,
});

export const RawStatus = Object.freeze({
  Unknown: -2,
  NotRunning: -1,
  MainMenu: 0,
  EditingMap: 1,
  Playing: 2,
  GameShutdownAnimation: 3,
  SongSelectEdit: 4,
  SongSelect: 5,
  ResultsScreen: 7,
  GameStartupAnimation: 10,
  MultiplayerRooms: 11,
  MultiplayerRoom: 12,
  MultiplayerSongSelect: 13,
  MultiplayerResultsscreen: 14,
  OsuDirect: 15,
  RankingTagCoop: 17,
  RankingTeam: 18,
  ProcessingBeatmaps: 19,
  Tourney: 22,
});
