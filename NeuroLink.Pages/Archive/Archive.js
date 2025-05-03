const memories_container = document.querySelector('.memories-container');

const credits = document.createElement('span');
credits.textContent = 'Ilyas and Yahya';
credits.classList.add('credits');
credits.onclick = function() {
    window.open('https://www.linkedin.com/in/ilyass-otmani-b947a723b/', '_blank');
    window.open('https://www.linkedin.com/in/yahya-saoud-206781264/', '_blank');
}

const memories = [
    {src: "Archive.Media/Memories/memory1.jpg", title: "The Blueprint That Dared to Dream", description: "The raw sketch of NeuroDrive's vision—imperfect, ambitious, and full of charm. Ready to be alive!"},
    {src: "Archive.Media/Memories/memory2.jpg", title: "When Wheels Met Screws", description: "Witness the humble beginnings of NeuroDrive when it was just a chassis and dreams. Every great journey begins with a tiny step... or wheel!"},
    {src: "Archive.Media/Memories/memory3.jpg", title: "Sleek, Shiny, and Ready to Roll", description: "Behold the beauty of NeuroDrive flexing its curves, showcasing its stunning acrylic frame in the spotlight of creation!"},
    {src: "Archive.Media/Memories/memory4.mp4", title: "Lights, Camera, Assembly", description: "From the drawing board to the workbench—see how NeuroDrive stole the stage and became the star of its own DIY show."},
    {src: "Archive.Media/Memories/memory5.jpg", title: "Pi-ing It All Together", description: "When the teacher came bearing gifts of innovation—Raspberry Pi, cameras, breadboards, and a whole lot of nerdy excitement."},
    {src: "Archive.Media/Memories/memory6.jpg", title: "The Toolbox Invasion", description: "Knives, screwdrivers, and scissors teamed up for the first operation on NeuroDrive's skeleton. Spoiler: no bolts were harmed (much)."},
    {src: "Archive.Media/Memories/memory7.jpg", title: "In Bed With NeuroDrive", description: "Who says you can't undress and play with a little bitech? NeuroDrive may be a toy car, but it's got my full attention tonight!"},
    {src: "Archive.Media/Memories/memory8.jpg", title: "Signs of the Times", description: "Tiny traffic signs ready to educate NeuroDrive on how to stop, yield, and make a U-turn in style."},
    {src: "Archive.Media/Memories/memory9.mp4", title: "Baby Steps", description: "NeuroDrive's maiden voyage: three glorious meters before gravity reminded it who's the boss."},
    {src: "Archive.Media/Memories/memory10.jpg", title: "Weather or Not, Here We Go", description: "With sensors for temperature, gas, and light, this little board became NeuroDrive's very own meteorologist."},
    {src: "Archive.Media/Memories/memory11.jpg", title: "Micro Beauty Close-Up", description: "Zooming in on the Weatherboard's dazzling components—because who said resistors and LEDs can't steal the spotlight?"},
    {src: "Archive.Media/Memories/memory12.jpg", title: "Shine Like a Diamond", description: "With LEDs glowing like a disco and sensors working overtime, this board said, Let's make some weather predictions!"},
    {src: "Archive.Media/Memories/memory13.jpg", title: "Self Proud Moment", description: "Proud, unshaken like a locked in spartian, my mind is my weapon, NeuroDrive is my battle, and victory is just ahead"},
    {src: "Archive.Media/Memories/memory14.jpg", title: "Breadboard Royalty", description: "The main breadboard: a humble piece of plastic tasked with connecting the most important components of NeuroDrive's destiny."},
    {src: "Archive.Media/Memories/memory15.jpg", title: "STOP! Know Your Limits Slave", description: "Just because you made a smart toy car doesn't mean you have permission to eat in the same plate with me, back off!"},
    {src: "Archive.Media/Memories/memory16.mp4", title: "Infrared Insights", description: "Testing two infrared sensors like a scientist on a mission—one black line, one white paper, endless possibilities."},
    {src: "Archive.Media/Memories/memory17.jpg", title: "Legs Day?", description: "With breadboards, ultrasonic sensors, and glowing LEDs, the upper skeleton of NeuroDrive is being in progress."},
    {src: "Archive.Media/Memories/memory18.mp4", title: "Ultrasonic High-Five", description: "Testing the ultrasonic sensor's object-avoiding reflexes—green LEDs flashing approval as my hand got too close for comfort."},
    {src: "Archive.Media/Memories/memory19.jpg", title: "Purr-fect Chill Session", description: "It's time to join the relaxation experts after a hardwork day. Three cats, two humans, and a shared philosophy: work hard, paw harder."},
    {src: "Archive.Media/Memories/memory20.jpg", title: "NeuroDrive: The First Reveal", description: "Fully assembled and proud, the first version of neuroDrive stood tall (on wheels), showcasing breadboards, LEDs, and cables galore."},
    {src: "Archive.Media/Memories/memory21.mp4", title: "The Beep and Blink Show", description: "Ultrasonic sensor tests continued—this time with NeuroDrive flexing its detection skills and lighting up like a champion."},
    {src: "Archive.Media/Memories/memory22.mp4", title: "HEY! Who's There", description: "White LEDs shining bright, turned on with a simple button—because even NeuroDrive deserves headlights for its night drives."},
    {src: "Archive.Media/Memories/memory23.jpg", title: "Headlights in the Dark", description: "Illuminating the night with crisp white LEDs, NeuroDrive proved it was ready to light the way forward."},
    {src: "Archive.Media/Memories/memory24.jpg", title: "No Work Til You Pet Me Servant", description: "Deadlines can wait—this tiny overlord demands attention. NeuroDrive may be the future, but right now, my laptop is a throne for this little queen."},
    {src: "Archive.Media/Memories/memory25.jpg", title: "NeuroDrive 1.0: NeuroDrive Stood", description: "A Picture Worth a Thousand Circuits. The first version of NeuroDrive stood as a testament to innovation."},
    {src: "Archive.Media/Memories/memory26.mp4", title: "Rolling into Action: NeuroDrive Live", description: "A video capturing NeuroDrive's assembled form in motion—a symphony of wires, breadboards, and determination."},
    {src: "Archive.Media/Memories/memory27.jpg", title: "One For Me, One For NeuroDrive", description: "Fueling both genius and innovation—one bite for me, and one... well, NeuroDrive deserves a snack too, right?"},
    {src: "Archive.Media/Memories/memory28.jpg", title: "The Mega Mind", description: "Meet NeuroDrive Mega Mind, the brain of the operation! A close-up shot of NeuroDrive's mastermind, looking ready to tackle the tech world."},
    {src: "Archive.Media/Memories/memory29.mp4", title: "Face Beauty Test", description: "NeuroDrive locked on to its first insight, Looking to its creator. First steps into the traffic sign recognition!"},
    {src: "Archive.Media/Memories/memory30.jpg", title: "NeuroDrive 2.0: Rising Above", description: "The upgraded, taller version of NeuroDrive showcased its complexity and the brilliance of its creator, standing strong as a marvel of design."},
    // {src: "Archive.Media/Memories/memory31.jpg", title: "Two Perfections Holding Each Other", description: "When innovation and awesomeness collide—my partner in crime and I, ready to conquer the world with a little smart toy car"},
    {src: "Archive.Media/Memories/memory32.jpg", title: "NeuroDrive 3.0: Polished and Proud", description: "A new chapter of brilliance—NeuroDrive 3.0, sleek and refined, ready to conquer the road and the future. Excited for what's next!"},
    // {src: "Archive.Media/Memories/memory33.jpg", title: "The Dream Team in Action", description: "A moment captured with two brilliant minds behind NeuroDrive, sharing a laugh that could power circuits with joy."},
    {src: "Archive.Media/Memories/memory34.mp4", title: "The Franken-Battery", description: "A jury-rigged battery of 9-volt cells sparked chaos, but powered NeuroDrive to life!"},
    {src: "Archive.Media/Memories/memory35.jpg", title: "Time For a Party", description: "A dazzling display of yellow lights turned NeuroDrive into a showstopper. Time for a party?"},
    {src: "Archive.Media/Memories/memory36.mp4", title: "NeuroDrive! ARE YOU A SPY", description: "The ultrasonic sensor scanned the room, a robotic dance of light and anticipation."},
    {src: "Archive.Media/Memories/memory37.mp4", title: "The Power Revolution", description: "Harnessing the power of the grid! A thrilling experiment with a transformer, my partner, and a healthy dose of caution."},
    {src: "Archive.Media/Memories/memory38.jpg", title: "NeuroDrive 3.0: The Visionary", description: "A sleek redesign! NeuroDrive 5.0 boasted impressive ultrasonic 'eyes' and a futuristic aesthetic."},
    {src: "Archive.Media/Memories/memory39.jpg", title: "The War Rig", description: "A clever adaptation! NeuroDrive morphed into a soil moisture monitor, guided by a user-controlled stick."},
    {src: "Archive.Media/Memories/memory40.jpg", title: "Forecasting Greatness", description: "Proudly displaying its weather board—because every great journey starts with knowing if you'll need an umbrella or sunglasses."},
    {src: "Archive.Media/Memories/memory41.jpg", title: "NeuroDrive Anatomy", description: "A closer look inside NeuroDrive, where circuits meet ambition and wires dream big. The inner beauty of innovation revealed!"},
    {src: "Archive.Media/Memories/memory42.jpg", title: "Slide Into Innovation", description: "Starting the NeuroDrive presentation: a battle of PowerPoint slides, caffeine, and hope."},
    {src: "Archive.Media/Memories/memory43.mp4", title: "Feline Invader: The NeuroCat", description: "Decided your work table was the purr-fect place to demand attention—proving even NeuroDrive has a soft spot for meow-mentary distractions."},
    {src: "Archive.Media/Memories/memory44.jpg", title: "Sibling Rivalry: The Presentation Panic", description: "NeuroDrive, stressed out on presentation day, scanning the room for its siblings (other projects)—team spirit or sheer panic? You decide!"},
    {src: "Archive.Media/Memories/memory45.jpg", title: "Strike a Pose, NeuroDrive!", description: "After a successful presentation, NeuroDrive transformed into a model, ready for its glamour shots. Move over, supermodels!"},
    {src: "Archive.Media/Memories/memory46.jpg", title: "Nature, Innovation, and Us", description: "A picture of you, your partner, and NeuroDrive in nature—where technology meets tranquility."},
    {src: "Archive.Media/Memories/memory47.jpg", title: "The Classroom Trio", description: "You, your partner, and NeuroDrive striking a pose in the class. Academic success captured in pixels."},
    {src: "Archive.Media/Memories/memory48.jpg", title: "The Dream Team with the Guru", description: "A proud moment captured with you, your partner, NeuroDrive, and your project supervisor. The ultimate innovation squad!"},
    {src: "Archive.Media/Memories/memory49.jpg", title: "The Sky's the Limit", description: "NeuroDrive captured from a high angle, basking in the glory of its hard work. A bird's-eye view of brilliance!"},
    {src: "Archive.Media/Memories/memory50.mp4", title: "NeuroDrive Panorama", description: "A video walking around NeuroDrive, showcasing every detail. It's like a red-carpet moment, but for a robot!"},
    {src: "Archive.Media/Memories/memory51.jpg", title: "Tech Buddies", description: "You and the Smart Glasses project, proving that innovation comes in all shapes and wearables. credits goes to: ", hasCredits: true},
    {src: "Archive.Media/Memories/memory52.jpg", title: "Amphibian Allies", description: "NeuroDrive chilling beside a frog lake, where cutting-edge technology meets ribbit-worthy serenity."},
    {src: "Archive.Media/Memories/memory53.jpg", title: "Grace on Gravel", description: "NeuroDrive atop a pile of gravel—because even robots deserve a gritty, dramatic photoshoot."},
    {src: "Archive.Media/Memories/memory54.jpg", title: "Dirt Don't Hurt", description: "NeuroDrive testing soil humidity, showing that even dirt can't stop its quest for greatness."},
    {src: "Archive.Media/Memories/memory55.jpg", title: "Kitten Finale", description: "A heartwarming end to the project with a tiny kitten, celebrating innovation with adorable whiskers and soft purrs. A perfect way to close this chapter!"},
    {src: "Archive.Media/Memories/memory56.jpg", title: "Turing Test", description: "NeuroDrive navigates a tabletop maze, sensing, deciding, and adapting—proving its intelligence one calculated move at a time."},
    {src: "Archive.Media/Memories/memory57.mp4", title: "Freedom", description: "NeuroDrive moves ahead, sensing its path, while I follow—its tethered lifeline in hand, a step away from true independence."},
    {src: "Archive.Media/Memories/memory58.jpg", title: "Road to Dawn", description: "NeuroDrive stands before handcrafted signs, bathed in sunset hues—an early glimpse of a future where machines read the road."},
    {src: "Archive.Media/Memories/memory59.jpg", title: "Echoes of Innovation", description: "Standing before curious minds, I share NeuroDrive’s journey—ideas exchanged, questions sparked, and the future of automation unfolding."},
];

memories.forEach(memory => {
    const memory_container = document.createElement('div');
    const memory_image = document.createElement('img');
    const memory_video = document.createElement('video');
    const memory_title = document.createElement('span');
    const memory_heart = document.createElement('i');
    const memory_description = document.createElement('span');

    memory_title.textContent = memory.title;
    memory_description.textContent = memory.description;

    memory_container.classList.add('memory-container');
    memory_title.classList.add('memory-title');
    memory_description.classList.add('memory-description');
    memory_heart.classList.add('memory-heart', 'fa-regular', 'fa-heart');
    
    if (memory.src.endsWith('.jpg')) {
        memory_image.src = memory.src;
        memory_image.classList.add('memory-image');
        memory_container.appendChild(memory_image);
    } 
    else if (memory.src.endsWith('.mp4')) {
        memory_video.src = memory.src;
        memory_video.autoplay = true;
        memory_video.loop = true;
        memory_video.muted = true;
        memory_video.classList.add('memory-video');
        memory_container.appendChild(memory_video);
    }

    if (memory.hasCredits) {
        const ilyasCredits = document.createElement('span');
        ilyasCredits.textContent = 'Ilyas';
        ilyasCredits.classList.add('credits');
        ilyasCredits.onclick = function() {
            window.open('https://www.linkedin.com/in/ilyass-otmani-b947a723b/', '_blank');
        }
    
        const separator = document.createTextNode(' and ');
    
        const yahyaCredits = document.createElement('span');
        yahyaCredits.textContent = 'Yahya';
        yahyaCredits.classList.add('credits');
        yahyaCredits.onclick = function() {
            window.open('https://www.linkedin.com/in/yahya-saoud-206781264/', '_blank');
        }
    
        memory_description.appendChild(ilyasCredits);
        memory_description.appendChild(separator);
        memory_description.appendChild(yahyaCredits);
    }

    memory_container.appendChild(memory_title);
    memory_container.appendChild(memory_description);
    memory_container.appendChild(memory_heart);
    memories_container.appendChild(memory_container);

    memory_image.onclick = function() {
        const dark_background = document.createElement('div');
        const zoomed_image_container = document.createElement('div');
        const zoomed_image = document.createElement('img');
        const close = document.createElement('i');

        zoomed_image.src = memory_image.src;

        zoomed_image_container.appendChild(zoomed_image);
        zoomed_image_container.appendChild(close);
        dark_background.appendChild(zoomed_image_container);
        document.body.appendChild(dark_background);

        dark_background.classList.add('dark-background');
        zoomed_image_container.classList.add('zoomed-image-container');
        zoomed_image.classList.add('zoomed-image');
        close.classList.add('close-icon', 'fa', 'fa-times');
         
        close.onclick = dark_background.onclick = () => {
            document.body.removeChild(dark_background);
        };
    }

    memory_heart.onclick = function() {
        memory_heart.classList.toggle('fa-regular');
        memory_heart.classList.toggle('fa-solid');
    };
});
