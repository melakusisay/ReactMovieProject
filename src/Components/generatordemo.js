function *rakshit(){
   yield "Season 1"
   console.log("Preparing season 2 now")

   yield "Season 2"
  console.log("Prepring season 3")

   yield "Season 3"



  return "Season Finale"
}


var series = rakshit()


series.next()
series.next()
