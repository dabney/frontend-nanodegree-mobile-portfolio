function getAdj(e){switch(e){case"dark":return dark;case"color":return colors;case"whimsical":return whimsy;case"shiny":return shiny;case"noisy":return noisy;case"apocalyptic":return apocalyptic;case"insulting":return insulting;case"praise":return praise;case"scientific":return scientific;default:return scientific}}function getNoun(e){switch(e){case"animals":return animals;case"profession":return professions;case"fantasy":return fantasy;case"music":return music;case"horror":return horror;case"gross":return gross;case"everyday":return everyday;case"jewelry":return jewelry;case"places":return places;case"scifi":return scifi;default:return scifi}}function generator(e,a){var r=getAdj(e),n=getNoun(a),i=parseInt(Math.random()*r.length),o=parseInt(Math.random()*n.length),t="The "+r[i].capitalize()+" "+n[o].capitalize();return t}function randomName(){var e=parseInt(Math.random()*adjectives.length),a=parseInt(Math.random()*nouns.length);return generator(adjectives[e],nouns[a])}function logAverageFrame(e){for(var a=e.length,r=0,n=a-1;n>a-11;n--)r+=e[n].duration;console.log("Average time to generate last 10 frames: "+r/10+"ms")}function updatePositions(){frame++,window.performance.mark("mark_start_frame");for(var e,a=0;a<pizzaMoverItems.length;a++)e=Math.sin(document.body.scrollTop/1250+a%5),pizzaMoverItems[a].style.transform="translate3d("+pizzaMoverItems[a].basicLeft+100*e+"px, 0px, 0)";if(window.performance.mark("mark_end_frame"),window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame"),frame%10===0){var r=window.performance.getEntriesByName("measure_frame_duration");logAverageFrame(r)}}var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"];var dark=["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"],colors=["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"],whimsy=["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"],shiny=["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"],noisy=["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"],apocalyptic=["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"],insulting=["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"],praise=["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"],scientific=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"],animals=["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"],professions=["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"],fantasy=["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"],music=["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"],horror=["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"],gross=["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"],everyday=["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"],jewelry=["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"],places=["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"],scifi=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var adjectives=["dark","color","whimsical","shiny","noise","apocalyptic","insulting","praise","scientific"],nouns=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"],selectRandomMeat=function(){var e=pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)];return e},selectRandomNonMeat=function(){var e=pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)];return e},selectRandomCheese=function(){var e=pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)];return e},selectRandomSauce=function(){var e=pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)];return e},selectRandomCrust=function(){var e=pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)];return e},ingredientItemizer=function(e){return"<li>"+e+"</li>"},makeRandomPizza=function(){var e,a="",r=Math.floor(4*Math.random()),n=Math.floor(3*Math.random()),i=Math.floor(2*Math.random());for(e=0;r>e;e++)a+=ingredientItemizer(selectRandomMeat());for(e=0;n>e;e++)a+=ingredientItemizer(selectRandomNonMeat());for(e=0;i>e;e++)a+=ingredientItemizer(selectRandomCheese());return a+=ingredientItemizer(selectRandomSauce()),a+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(e){var a,r,n,i,o,t;return a=document.createElement("div"),r=document.createElement("div"),n=document.createElement("img"),i=document.createElement("div"),a.classList.add("randomPizzaContainer"),a.style.width="33.33%",a.style.height="325px",a.id="pizza"+e,r.classList.add("col-md-6"),n.src="images/pizza.webp",n.classList.add("img-responsive"),r.appendChild(n),a.appendChild(r),i.classList.add("col-md-6"),o=document.createElement("h4"),o.innerHTML=randomName(),i.appendChild(o),t=document.createElement("ul"),t.innerHTML=makeRandomPizza(),i.appendChild(t),a.appendChild(i),a},resizePizzas=function(e){function a(e){switch(e){case"1":return void(document.querySelector("#pizzaSize").innerHTML="Small");case"2":return void(document.querySelector("#pizzaSize").innerHTML="Medium");case"3":return void(document.querySelector("#pizzaSize").innerHTML="Large");default:console.log("bug in changeSliderLabel")}}function r(e,a){function r(e){switch(e){case"1":return.25;case"2":return.3333;case"3":return.5;default:console.log("bug in sizeSwitcher")}}var n=e.offsetWidth,i=document.querySelector("#randomPizzas").offsetWidth,o=n/i,t=r(a),s=(t-o)*i;return s}function n(e){for(var a,n,i=0;i<document.querySelectorAll(".randomPizzaContainer").length;i++)a=r(document.querySelectorAll(".randomPizzaContainer")[i],e),n=document.querySelectorAll(".randomPizzaContainer")[i].offsetWidth+a+"px",document.querySelectorAll(".randomPizzaContainer")[i].style.width=n}window.performance.mark("mark_start_resize"),a(e),n(e),window.performance.mark("mark_end_resize"),window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var i=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+i[0].duration+"ms")};window.performance.mark("mark_start_generating");for(var pizzasDiv=document.getElementById("randomPizzas"),i=2;100>i;i++)pizzasDiv.appendChild(pizzaElementGenerator(i));window.performance.mark("mark_end_generating"),window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var timeToGenerate=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+timeToGenerate[0].duration+"ms");var frame=0,pizzaMoverItems=[];window.addEventListener("scroll",updatePositions),document.addEventListener("DOMContentLoaded",function(){for(var e=8,a=256,r=document.querySelector("#movingPizzas1"),n=0;200>n;n++){var i=document.createElement("img");i.className="mover",i.src="images/pizza77X100.webp",i.style.height="100px",i.style.width="73.33px",i.basicLeft=n%e*a,i.style.top=Math.floor(n/e)*a+"px",r.appendChild(i)}pizzaMoverItems=document.querySelectorAll(".mover"),updatePositions()});