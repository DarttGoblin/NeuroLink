const express = require('express');
const SerialPort = require('serialport');
const app = express();
const port = 9999;

// Initialize SerialPort (use correct port for your setup)
const arduinoPort = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 }); // Adjust port as needed

// Middleware to parse JSON body requests
app.use(express.json());

// Sample route to control movement
app.post('/move', (req, res) => {
  const { direction } = req.body; // Example: { "direction": "forward" }
  
  let command = '';
  switch (direction) {
    case 'forward': command = 'F'; break; // Forward command
    case 'backward': command = 'B'; break; // Backward command
    case 'left': command = 'L'; break; // Left command
    case 'right': command = 'R'; break; // Right command
    case 'stop': command = 'S'; break; // Stop command
  }
  
  // Send command to Arduino
  arduinoPort.write(command, (err) => {
    if (err) {
      return res.status(500).send('Error sending command');
    }
    res.send('Command sent');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});