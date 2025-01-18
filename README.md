

# 🎉 B/there RSVP App 

Welcome to **B/there**! This app allows users to create, share, and manage events that require RSVPs. Guests can view event details and RSVP, while event owners have full control over creating, editing, and deleting their events.  

---

## 🚀 Features  

### For Event Owners:  
- 📝 **Create Events**: Add event details, including name, description, date, time, location, and a banner image.  
- ✏️ **Edit Events**: Update event information when plans change.  
- ❌ **Delete Events**: Remove events you no longer wish to host.  
- 🔗 **Share Events**: Generate shareable links for your events to invite guests.  

### For Guests:  
- 👀 **View Events**: Access event details, including date, time, venue, and description.  
- 🖋️ **RSVP**: Submit your name and email to confirm your attendance.  

### General Features:  
- 📅 **Date and Time Formatting**: Events are displayed in a user-friendly DD-MM-YY and HH:MM format.  
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop.  
- 🔄 **Real-Time Updates**: Changes to events or RSVPs are reflected immediately.  

---

## 🛠️ Tech Stack  

### Frontend:  
- ⚛️ **React**  
- 🌐 **React Router**  
- 📦 **React Query** for state and API data fetching  
- 🎨 **Tailwind CSS** for styling  

### Backend:  
- 🖥️ **Node.js** and **Express.js**  
- 📂 **MongoDB** for database storage  
- 🖼️ **Multer** for handling image uploads  
- 🔒 **JWT Authentication**  

---

## ✨ Getting Started  

### Prerequisites:  
- 📦 **Node.js**  
- 📂 **MongoDB**  

### Installation:  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/rsvp-app.git  
   ```  

2. Navigate to the project directory:  
   ```bash
   cd rsvp-app  
   ```  

3. Install dependencies:  
   ```bash
   npm install  
   ```  

4. Create an `.env` file in the root and include:  
   ```env
   PORT=5000  
   MONGO_URI=<your-mongodb-connection-string>  
   JWT_SECRET=<your-secret-key>  
   ```  

5. Start the development server:  
   ```bash
   npm run dev  
   ```  

6. Navigate to [http://localhost:5173](http://localhost:5173) in your browser.  

---

## 🔧 Usage  

### Creating an Event:  
1. Click the **Create Event** button.  
2. Fill out the event details form.  
3. Upload a banner image.  
4. Submit to generate a shareable event link!  

### RSVP to an Event:  
1. Open the shared event link.  
2. Review the event details.  
3. Scroll down to the RSVP section, complete the form, and submit.  

---

## 📝 Future Enhancements  
- 🔔 Email notifications for RSVPs and event reminders.  
- 📊 Dashboard for event analytics (e.g., number of RSVPs).  
- 🌎 Map integration for event locations.  
- 🛠️ Improved error handling and form validation.  

---

## 👩‍💻 Contributors  

- **Rorisang Putu** - Software Developer & Project Creator  

---

## 📜 License  

This project is licensed under the MIT License.  

