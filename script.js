const commands = String.raw`system@internal-rkstudios.io/:~ cd HAX
system@internal-rkstudios.io/HAX/:~ ls`;

const beep = String.raw`


 ________  ___  __            ________  _________  ___  ___  ________  ___  ________  ________      
|\   __  \|\  \|\  \         |\   ____\|\___   ___|\  \|\  \|\   ___ \|\  \|\   __  \|\   ____\     
\ \  \|\  \ \  \/  /__       \ \  \___|\|___ \  \_\ \  \\\  \ \  \_|\ \ \  \ \  \|\  \ \  \___|_    
 \ \   _  _\ \   ___  \       \ \_____  \   \ \  \ \ \  \\\  \ \  \ \\ \ \  \ \  \\\  \ \_____  \   
  \ \  \\  \\ \  \\ \  \       \|____|\  \   \ \  \ \ \  \\\  \ \  \_\\ \ \  \ \  \\\  \|____|\  \  
   \ \__\\ _\\ \__\\ \__\        ____\_\  \   \ \__\ \ \_______\ \_______\ \__\ \_______\____\_\  \ 
    \|__|\|__|\|__| \|__|       |\_________\   \|__|  \|_______|\|_______|\|__|\|_______|\_________\
                                \|_________|                                            \|_________|
                                                                                                    
                                                                                                          
                        


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #`;

const samurai = String.raw`

                                                                 
                                                                                                                                            
                                                                                                                                            
                                                       lllllll                                                                              
                                                       l:::::l                                                                              
                                                       l:::::l                                                                              
                                                       l:::::l                                                                              
wwwwwww           wwwww           wwwwwwweeeeeeeeeeee   l::::l    cccccccccccccccc  ooooooooooo     mmmmmmm    mmmmmmm      eeeeeeeeeeee    
 w:::::w         w:::::w         w:::::ee::::::::::::ee l::::l  cc:::::::::::::::coo:::::::::::oo mm:::::::m  m:::::::mm  ee::::::::::::ee  
  w:::::w       w:::::::w       w:::::e::::::eeeee:::::el::::l c:::::::::::::::::o:::::::::::::::m::::::::::mm::::::::::me::::::eeeee:::::ee
   w:::::w     w:::::::::w     w:::::e::::::e     e:::::l::::lc:::::::cccccc:::::o:::::ooooo:::::m::::::::::::::::::::::e::::::e     e:::::e
    w:::::w   w:::::w:::::w   w:::::we:::::::eeeee::::::l::::lc::::::c     cccccco::::o     o::::m:::::mmm::::::mmm:::::e:::::::eeeee::::::e
     w:::::w w:::::w w:::::w w:::::w e:::::::::::::::::el::::lc:::::c            o::::o     o::::m::::m   m::::m   m::::e:::::::::::::::::e 
      w:::::w:::::w   w:::::w:::::w  e::::::eeeeeeeeeee l::::lc:::::c            o::::o     o::::m::::m   m::::m   m::::e::::::eeeeeeeeeee  
       w:::::::::w     w:::::::::w   e:::::::e          l::::lc::::::c     cccccco::::o     o::::m::::m   m::::m   m::::e:::::::e           
        w:::::::w       w:::::::w    e::::::::e        l::::::c:::::::cccccc:::::o:::::ooooo:::::m::::m   m::::m   m::::e::::::::e          
         w:::::w         w:::::w      e::::::::eeeeeeeel::::::lc:::::::::::::::::o:::::::::::::::m::::m   m::::m   m::::me::::::::eeeeeeee  
          w:::w           w:::w        ee:::::::::::::el::::::l cc:::::::::::::::coo:::::::::::oom::::m   m::::m   m::::m ee:::::::::::::e  
           www             www           eeeeeeeeeeeeeellllllll   cccccccccccccccc  ooooooooooo  mmmmmm   mmmmmm   mmmmmm   eeeeeeeeeeeeee  
                                                                                                                                            
                                                                                                                                            
                                                                                                                                            

`;

let blink = document.querySelector('.blink');
const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
	return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
};

const ResetTerminal = () => {
	code.innerHTML = '<span class="blink">█</span>';
	blink = document.querySelector('.blink');
};

const RenderString = characters => {
	blink.insertAdjacentHTML('beforeBegin', characters);
};

const TypeString = async characters => {
	for(const character of characters.split('')) {
		await Delay(RandomNumber(100, 200));
		RenderString(character);
	}
}

const DrawLines = async ( characters, min = 50, max = 500 ) => {
	for(const line of characters.split('\n')) {
		await Delay(RandomNumber(min, max));
		RenderString(`${line}\n`);
	}
}

const DrawCommands = async commands => {
	for( const line of commands.split('\n')){
		// Seperate the directory and the command
		const [currentDir, command] = line.split(':~ ');

		// Print the directory, type the command and finish with new line
		RenderString(`${currentDir}:~ `);
		await TypeString(command);
		RenderString('\n');
	}
}


// Start the code
(async()=> {
	await DrawCommands("/:~ ssh system@internal-rkstudios.io -p 2000");
	await Delay(1000);
	RenderString("system@internal-rkstudios.io password:###################");
	await Delay(5000);
	RenderString("\n");
	await DrawCommands(commands);
	RenderString('\nbeep.js    samurai.js\n\n');
	await DrawCommands('system@internal-rkstudios.io/HAX:~ node logs.js');
	await DrawLines( beep );
	await TypeString("\n\n HELLO ########### WELCOME TO OUR WEBPAGE ! ");
	await Delay(3000);
	ResetTerminal();
	await DrawCommands('system@internalx-rkstudios.io:~ KEY=3db7ca618243da1ba3bc76ab14bcf07b node system.js');
	await DrawLines(samurai);
})();

