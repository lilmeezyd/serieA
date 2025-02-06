
https://www.serieafantasy.com/api/v0/userteams/user-team-for-round/?user=524&football_round=208
https://www.serieafantasy.com/api/v0/userteams/user-team-for-round/?user=524&football_round=209

https://www.serieafantasy.com/api/v0/users/token/refresh/

https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=1&page_size=100

const cap_count = {}
const player_count = {}
const eo_count = {}

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

{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
      {
          "id": 4578296,
          "football_round": {
              "id": 209,
              "number": 23,
              "season": {
                  "id": 37,
                  "name": "2024-2025",
                  "status": "live"
              },
              "userteam_deadline": "2025-01-31T18:45:00Z",
              "status": "finished"
          },
          "formation": {
              "id": 3,
              "formation_type": "4-3-3",
              "enabled": true
          },
          "football_players": [
              {
                  "id": 63487742,
                  "football_player": {
                      "id": 1451,
                      "first_name": "Marcus",
                      "last_name": "Thuram",
                      "football_club": {
                          "id": 8,
                          "full_name": "Inter",
                          "abbreviation": "INT",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/inter-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fb0c1f61df198e7140397b60223792b8bcf4cf7078ab333076bf9cff4a0d0b05",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/inter-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=889efbd92f8501b0618d89d420c5d56452b6ab39040f875f67d10cd777c26653",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/inter-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a72e8ba74571f32374c7149a006e83b1bdff79e38f86966e612b26a3170c2794"
                      },
                      "initial_price": "8.6",
                      "current_price": "9.4",
                      "status": "fit",
                      "position": "forward"
                  },
                  "position": "forward",
                  "position_index": 1,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "3"
              },
              {
                  "id": 63489594,
                  "football_player": {
                      "id": 1502,
                      "first_name": "Mateo",
                      "last_name": "Retegui",
                      "football_club": {
                          "id": 1,
                          "full_name": "Atalanta",
                          "abbreviation": "ATA",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/atalanta-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e2afd495a23c2b24540c97c87d6427509e1f40cbbaac90f7b1803a64be0aae65",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/atalanta-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=18a33daf1b89e5452b71b48718b5385a43f73f04572cdf01c0253f7ba0519fd0",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/atalanta-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7b9b2fff85b64d6ba9d1b673ab51b5a0a2e75cba6524ea267f198b646d83d252"
                      },
                      "initial_price": "6.0",
                      "current_price": "7.0",
                      "status": "fit",
                      "position": "forward"
                  },
                  "position": "forward",
                  "position_index": 2,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "3"
              },
              {
                  "id": 63487622,
                  "football_player": {
                      "id": 982,
                      "first_name": "Moise",
                      "last_name": "Kean",
                      "football_club": {
                          "id": 6,
                          "full_name": "Fiorentina",
                          "abbreviation": "FIO",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/fiorentina-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=edd137409b81bbc24577f5c832ed6fd4fd3edab723fc3085b85b7ba59b440da7",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/fiorentina-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=328620a451d3dca9ad02724fb87361ca83fcd1f94b7dd09d0531cb44b9bf940f",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/fiorentina-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cd81aeaaabe3041aaff9e591aad84df43f5b098d1d1e35c3140f432c43f49d5d"
                      },
                      "initial_price": "5.0",
                      "current_price": "5.6",
                      "status": "fit",
                      "position": "forward"
                  },
                  "position": "forward",
                  "position_index": 3,
                  "is_captain": true,
                  "is_vice_captain": false,
                  "football_player_info": "16"
              },
              {
                  "id": 63499115,
                  "football_player": {
                      "id": 1658,
                      "first_name": "Jens",
                      "last_name": "Odgaard",
                      "football_club": {
                          "id": 3,
                          "full_name": "Bologna",
                          "abbreviation": "BOL",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/bologna-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ecfd0524fcdb334dda71d5ab40fc21d9fa9a869ee61267286e86129be8c84188",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/bologna-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d2d9923604065a72d57894f215950ff1021bf2d9d7a7f4fddcde3c1751eddae5",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/bologna-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2edde6314e76b506003f83fbb3b28e99c4092a8f989ff4a7d81a3b84d4c5cc03"
                      },
                      "initial_price": "4.6",
                      "current_price": "4.8",
                      "status": "fit",
                      "position": "midfielder"
                  },
                  "position": "midfielder",
                  "position_index": 4,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "7"
              },
              {
                  "id": 63489598,
                  "football_player": {
                      "id": 477,
                      "first_name": "Mattia",
                      "last_name": "Zaccagni",
                      "football_club": {
                          "id": 10,
                          "full_name": "Lazio",
                          "abbreviation": "LAZ",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/lazio-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1aa90764024cb8432b00d66943b5a8f91242ccd0845fa9bd94dfe7bfc3d1ac7c",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/lazio-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5a9c920c2c742b11006c8e86a54f10e97e07cc49618f764635a48f7c78c4c621",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/lazio-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b81a556ec2a7967a0e49d9a3d59fb88e4621cc1594bb85c838656c27d6504b3d"
                      },
                      "initial_price": "7.0",
                      "current_price": "7.6",
                      "status": "fit",
                      "position": "midfielder"
                  },
                  "position": "midfielder",
                  "position_index": 5,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "15"
              },
              {
                  "id": 63493449,
                  "football_player": {
                      "id": 1361,
                      "first_name": "Florian",
                      "last_name": "Thauvin",
                      "football_club": {
                          "id": 19,
                          "full_name": "Udinese",
                          "abbreviation": "UDI",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/udinese-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=894f847455b9c242fd3d3bf2847b383552a74b170770736504736199817500f9",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/udinese-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d988ed1d9e4ce8ca5fc407ddbb998684f3d228b16a674be2466755948f4d49f0",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/udinese-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e01d3c33c746d20cb6ae39a5189991289bdf9af6610677aa2f76197e2747eb2d"
                      },
                      "initial_price": "5.6",
                      "current_price": "6.0",
                      "status": "fit",
                      "position": "midfielder"
                  },
                  "position": "midfielder",
                  "position_index": 6,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "4"
              },
              {
                  "id": 63491596,
                  "football_player": {
                      "id": 300,
                      "first_name": "Giovanni",
                      "last_name": "Di Lorenzo",
                      "football_club": {
                          "id": 12,
                          "full_name": "Napoli",
                          "abbreviation": "NAP",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/napoli-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=27101e32acfdb422d3368da2c56e609a337182232fa3a8972a165c83d36d054d",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/napoli-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4393e6069971fc6d622ef5aaba47000ac22e5419b26bbd70a11a7366231f8c6e",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/napoli-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6a07f04a2a9632bf050c98bd53163372553bbfe4cd7a5d1fb46d0bb1ef803b68"
                      },
                      "initial_price": "6.6",
                      "current_price": "7.4",
                      "status": "fit",
                      "position": "defender"
                  },
                  "position": "defender",
                  "position_index": 7,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "5"
              },
              {
                  "id": 63491590,
                  "football_player": {
                      "id": 903,
                      "first_name": "Denzel",
                      "last_name": "Dumfries",
                      "football_club": {
                          "id": 8,
                          "full_name": "Inter",
                          "abbreviation": "INT",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/inter-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fb0c1f61df198e7140397b60223792b8bcf4cf7078ab333076bf9cff4a0d0b05",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/inter-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=889efbd92f8501b0618d89d420c5d56452b6ab39040f875f67d10cd777c26653",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/inter-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a72e8ba74571f32374c7149a006e83b1bdff79e38f86966e612b26a3170c2794"
                      },
                      "initial_price": "6.0",
                      "current_price": "6.2",
                      "status": "fit",
                      "position": "defender"
                  },
                  "position": "defender",
                  "position_index": 8,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "5"
              },
              {
                  "id": 63489559,
                  "football_player": {
                      "id": 1444,
                      "first_name": "Sam",
                      "last_name": "Beukema",
                      "football_club": {
                          "id": 3,
                          "full_name": "Bologna",
                          "abbreviation": "BOL",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/bologna-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ecfd0524fcdb334dda71d5ab40fc21d9fa9a869ee61267286e86129be8c84188",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/bologna-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d2d9923604065a72d57894f215950ff1021bf2d9d7a7f4fddcde3c1751eddae5",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/bologna-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2edde6314e76b506003f83fbb3b28e99c4092a8f989ff4a7d81a3b84d4c5cc03"
                      },
                      "initial_price": "5.0",
                      "current_price": "5.0",
                      "status": "fit",
                      "position": "defender"
                  },
                  "position": "defender",
                  "position_index": 9,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "9"
              },
              {
                  "id": 63499116,
                  "football_player": {
                      "id": 1179,
                      "first_name": "Jaka",
                      "last_name": "Bijol",
                      "football_club": {
                          "id": 19,
                          "full_name": "Udinese",
                          "abbreviation": "UDI",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/udinese-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=894f847455b9c242fd3d3bf2847b383552a74b170770736504736199817500f9",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/udinese-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d988ed1d9e4ce8ca5fc407ddbb998684f3d228b16a674be2466755948f4d49f0",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/udinese-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e01d3c33c746d20cb6ae39a5189991289bdf9af6610677aa2f76197e2747eb2d"
                      },
                      "initial_price": "4.6",
                      "current_price": "4.4",
                      "status": "fit",
                      "position": "defender"
                  },
                  "position": "defender",
                  "position_index": 10,
                  "is_captain": false,
                  "is_vice_captain": true,
                  "football_player_info": "5"
              },
              {
                  "id": 63489558,
                  "football_player": {
                      "id": 1804,
                      "first_name": "David",
                      "last_name": "de Gea",
                      "football_club": {
                          "id": 6,
                          "full_name": "Fiorentina",
                          "abbreviation": "FIO",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/fiorentina-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=edd137409b81bbc24577f5c832ed6fd4fd3edab723fc3085b85b7ba59b440da7",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/fiorentina-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=328620a451d3dca9ad02724fb87361ca83fcd1f94b7dd09d0531cb44b9bf940f",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/fiorentina-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cd81aeaaabe3041aaff9e591aad84df43f5b098d1d1e35c3140f432c43f49d5d"
                      },
                      "initial_price": "4.6",
                      "current_price": "5.2",
                      "status": "fit",
                      "position": "goalkeeper"
                  },
                  "position": "goalkeeper",
                  "position_index": 11,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "6"
              },
              {
                  "id": 63487756,
                  "football_player": {
                      "id": 1150,
                      "first_name": "Mile",
                      "last_name": "Svilar",
                      "football_club": {
                          "id": 14,
                          "full_name": "Roma",
                          "abbreviation": "ROM",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/roma-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d304553b5786380ea5f03b4689e4fec8366c2eae9d8ec91f0d417be498bc3ead",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/roma-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=3f841401a94a8435b67777a3fcbe701dd124859269d296fa08d2c7c8d8d816e1",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/roma-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e1b8f5bb7567c0937b0a29dfb654bf130cf5b76dc24f6fcede2fdcd32399fb1c"
                      },
                      "initial_price": "5.0",
                      "current_price": "4.8",
                      "status": "fit",
                      "position": "goalkeeper"
                  },
                  "position": "goalkeeper",
                  "position_index": 12,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "5"
              },
              {
                  "id": 63487755,
                  "football_player": {
                      "id": 116,
                      "first_name": "Theo",
                      "last_name": "Hernandez",
                      "football_club": {
                          "id": 11,
                          "full_name": "Milan",
                          "abbreviation": "MIL",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/milan-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fd0d18b06163c1fb062764ba0c9189b269c12bd8e559957462d9d860743ea106",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/milan-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e82862f7245987bade7c82ab63891c90322e0d0a05371e77be3cdc219cfda304",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/milan-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1762cf506c342b80a640466bcf5eba4fb2a73fca6a6285d882c3826bdf865abb"
                      },
                      "initial_price": "7.0",
                      "current_price": "7.2",
                      "status": "fit",
                      "position": "defender"
                  },
                  "position": "defender",
                  "position_index": 13,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "5"
              },
              {
                  "id": 63487743,
                  "football_player": {
                      "id": 1450,
                      "first_name": "Christian",
                      "last_name": "Pulisic",
                      "football_club": {
                          "id": 11,
                          "full_name": "Milan",
                          "abbreviation": "MIL",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/milan-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fd0d18b06163c1fb062764ba0c9189b269c12bd8e559957462d9d860743ea106",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/milan-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e82862f7245987bade7c82ab63891c90322e0d0a05371e77be3cdc219cfda304",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/milan-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1762cf506c342b80a640466bcf5eba4fb2a73fca6a6285d882c3826bdf865abb"
                      },
                      "initial_price": "9.0",
                      "current_price": "9.2",
                      "status": "fit",
                      "position": "midfielder"
                  },
                  "position": "midfielder",
                  "position_index": 14,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "4"
              },
              {
                  "id": 63487744,
                  "football_player": {
                      "id": 1248,
                      "first_name": "Ademola",
                      "last_name": "Lookman",
                      "football_club": {
                          "id": 1,
                          "full_name": "Atalanta",
                          "abbreviation": "ATA",
                          "logo_image": "https://serieafantasy.s3.amazonaws.com/football_clubs/logo/atalanta-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e2afd495a23c2b24540c97c87d6427509e1f40cbbaac90f7b1803a64be0aae65",
                          "jersey_outfield": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_outfield/atalanta-outfield.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=18a33daf1b89e5452b71b48718b5385a43f73f04572cdf01c0253f7ba0519fd0",
                          "jersey_goalkeeper": "https://serieafantasy.s3.amazonaws.com/football_clubs/jersey_goalkeeper/atalanta-goalkeeper.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYEYUUR3WDB7KRX4L%2F20250205%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250205T131021Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7b9b2fff85b64d6ba9d1b673ab51b5a0a2e75cba6524ea267f198b646d83d252"
                      },
                      "initial_price": "9.0",
                      "current_price": "9.8",
                      "status": "minor-injury",
                      "position": "midfielder"
                  },
                  "position": "midfielder",
                  "position_index": 15,
                  "is_captain": false,
                  "is_vice_captain": false,
                  "football_player_info": "-"
              }
          ],
          "transfers_used": 2,
          "wildcard_used": false,
          "penalty_points": 0
      }
  ]
}