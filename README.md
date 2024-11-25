# simplisynth
#### Video Demo:  https://youtu.be/nCa4d0D-Djc
#### Description: a very simple synthesizer.
## Files:

### index.html
The **index.html** file serves as the foundational structure for the entire website, containing all the necessary HTML code. This file is organized into a central **container** division, which is subdivided into three distinct sections: **head**, **main**, and **footer**. Each of these sections plays a crucial role in the overall functionality and presentation of the site.

- The **head** section includes three user interface controls specifically designed to adjust the sound settings. These controls are as follows:
   - A **radio-type input field** that enables the user to alter the frequency of each musical note by shifting it up or down by an octave.
   - A **select dropdown** that allows the user to choose the desired waveform, thus influencing the tonal quality of the sound.
   - A **checkbox** that toggles the activation of **tremolo**, enabling or disabling this effect for the generated sound.

- The **main** section of the page features the interactive **keyboard**, along with **frequency data** for each musical note, providing users with both visual and auditory information.

- The **footer** section includes a hyperlink that directs users to the **author's website**, offering additional context related to the project.

To ensure optimal layout and responsiveness, both the **container** and its internal components are structured using **CSS Grid**. The use of CSS Grid was specifically chosen for its ability to create a flexible, responsive design, ensuring that the keyboard and other controls are seamlessly aligned and adapt to various screen sizes, providing a smooth and consistent user experience.

### style.css
The **style.css** file contains the complete set of CSS rules that govern the styling and layout of the webpage. The file begins with a **CSS reset**, ensuring consistent rendering of elements across different browsers by removing any default styling that might interfere with the custom design.

Following the reset, the file defines a series of **color variables** aimed at promoting standardization throughout the site, making it easier to manage and update color schemes as needed.

The **body** of the page is configured to occupy 100% of both the height and width of the screen. To achieve a centered layout, it utilizes a **flexbox display**, positioning the central **container** perfectly in the middle of the viewport. This ensures that the main content remains balanced, regardless of screen size.

Both the **container** and its child elements leverage **CSS Grid** to enable precise alignment and responsive behavior. The use of grid allows for a flexible layout that adapts seamlessly to different screen sizes while maintaining structural integrity.

Particularly in the **keyboard** section, each individual key is meticulously positioned to closely resemble the layout of a traditional piano keyboard. This was accomplished through careful placement within the CSS grid system, ensuring that the visual alignment mimics the arrangement of keys accurately.

The file also incorporates the **@media** rule to provide additional responsiveness. For screens wider than 950 pixels, the **container's height** is slightly increased for a more balanced appearance. Furthermore, when the screen is in **portrait orientation**, the container's width is adjusted to take up a larger portion of the screen, ensuring the layout remains visually appealing and functional across various devices.

### app.js
The **app.js** file is responsible for managing the dynamic sound behavior within the application. It begins by defining a variable called **keys**, which holds all the HTML `<div>` elements that are designated as "pianokey". These divs represent the individual keys of the virtual keyboard.

The script then iterates through the **keys** array using the **forEach()** method. For each key on the keyboard, an **addEventListener()** is applied, specifically listening for the `'pointerdown'` event. When a user clicks or taps on a key, the associated event handler triggers a series of commands that generate the synthesizer sound.

The process starts by creating a new **AudioContext** instance, initialized with the Web Audio API, and stored in the **ctx** variable. This context is essential for managing and manipulating audio signals within the web browser. Next, a **GainNode** is instantiated and assigned to the **master** variable. This node acts as the volume control for the audio output.

To enable the optional tremolo effect, a **trem** variable is created, which is only activated if the user has selected the tremolo checkbox. Additionally, an **osc2** variable is declared for future use in managing a second oscillator, if needed.

An **oscillator** is then created by calling the **createOscillator()** method, which is stored in the **osc** variable. This oscillator is connected to the **master** gain node, and the **master** node is in turn connected to the **ctx.destination**, which routes the audio signal to the final sound output, producing the desired sound.

To ensure the sound stops when the user releases the key, another **addEventListener()** is applied to each key, listening for the **'pointerup'** or **'pointerleave'** events. These event listeners halt the sound when the user stops pressing the key or when the cursor leaves the key, effectively controlling the sound's duration and providing a realistic interaction with the virtual keyboard.


### noteIcon.ico
The noteIcon.ico file is a specialized image file used in conjunction with the favicon tag within the HTML document. Its primary purpose is to display a distinctive icon in the browser tab, appearing next to the webpage title. This icon contributes to the overall visual identity of the website, offering an aesthetically pleasing and recognizable element for users, though it serves no functional role beyond enhancing the site's appearance in the browser interface.