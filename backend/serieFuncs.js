
https://www.serieafantasy.com/api/v0/userteams/user-team-for-round/?user=524&football_round=208

// captain count
football_players_all.forEach(x => {
    if (x.is_captain === true) {
      if (Object.keys(cap_count).includes((x.football_player.id).toString())) {
         cap_count[x.football_player.id] = cap_count[x.football_player.id] + 1 
        } else {
        cap_count[x.football_player.id] = 1
      }
    }
  })

 // player Count
  football_players_all.forEach(x => {
    if (Object.keys(player_count).includes((x.football_player.id).toString())) {
       player_count[x.football_player.id] = player_count[x.football_player.id] + 1 
      } else {
      player_count[x.football_player.id] = 1
    }
})

// Player eo
football_players_all.forEach(x => {
    if(x.is_captain === true) {
        if (Object.keys(eo_count).includes((x.football_player.id).toString())) {
            eo_count[x.football_player.id] = eo_count[x.football_player.id] + 2 
           } else {
           eo_count[x.football_player.id] = 2
         }
    } else {
        if (Object.keys(eo_count).includes((x.football_player.id).toString())) {
            eo_count[x.football_player.id] = eo_count[x.football_player.id] + 1 
           } else {
           eo_count[x.football_player.id] = 1
         }
    }
})