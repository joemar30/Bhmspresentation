import { useState, useEffect, useCallback } from "react";
import slide1 from "../imports/Screenshot_2026-04-29_045241.png";
import slide2 from "../imports/Screenshot_2026-04-29_045259.png";
import slide3 from "../imports/Screenshot_2026-04-29_045315.png";
import slide4 from "../imports/Screenshot_2026-04-29_045333.png";
import slide5 from "../imports/Screenshot_2026-04-29_045353.png";
import slide6 from "../imports/Screenshot_2026-04-29_050646.png";
import slide7 from "../imports/Screenshot_2026-04-29_050709.png";
import slide8 from "../imports/Screenshot_2026-04-29_050722.png";
import slide9 from "../imports/Screenshot_2026-04-29_050736.png";
import slide10 from "../imports/Screenshot_2026-04-29_051405.png";
import slide11 from "../imports/Screenshot_2026-04-29_051425.png";
import slide12 from "../imports/Screenshot_2026-04-29_051443.png";
import slide13 from "../imports/Screenshot_2026-04-29_051453.png";
import slide14 from "../imports/Screenshot_2026-04-29_051514.png";
import slide15 from "../imports/Screenshot_2026-04-29_051607.png";
import slide16 from "../imports/Screenshot_2026-04-29_051618.png";
import slide17 from "../imports/Screenshot_2026-04-29_051631.png";
import slide18 from "../imports/Screenshot_2026-04-29_051647.png";
import slide19 from "../imports/Screenshot_2026-04-29_051657.png";
import slide20 from "../imports/Screenshot_2026-04-29_051741.png";
import slide21 from "../imports/Screenshot_2026-04-29_051756.png";
import slide22 from "../imports/Screenshot_2026-04-29_051806.png";
import slide23 from "../imports/Screenshot_2026-04-29_051822.png";
import slide24 from "../imports/Screenshot_2026-04-29_051837.png";
import slide25 from "../imports/Screenshot_2026-04-29_051851.png";
import slide26 from "../imports/Screenshot_2026-04-29_054754.png";
import slide27 from "../imports/Screenshot_2026-04-29_054805.png";
import slide28 from "../imports/Screenshot_2026-04-29_054826.png";
import slide29 from "../imports/Screenshot_2026-04-29_054838.png";
import slide30 from "../imports/Screenshot_2026-04-29_055109.png";
import slide31 from "../imports/Screenshot_2026-04-29_063115.png";
import slide32 from "../imports/Screenshot_2026-04-29_063733.png";
import slide33 from "../imports/Screenshot_2026-04-29_063718.png";
import slide34 from "../imports/Screenshot_2026-04-29_063608.png";
import slide35 from "../imports/Screenshot_2026-04-29_063554.png";
import slide36 from "../imports/Screenshot_2026-04-29_063324.png";
import slide37 from "../imports/Screenshot_2026-04-29_063313.png";
import slide38 from "../imports/Screenshot_2026-04-29_063136.png";
import slide39 from "../imports/Screenshot_2026-04-29_063125.png";
import slide40 from "../imports/Screenshot_2026-04-29_055130.png";
import slide41 from "../imports/Screenshot_2026-04-29_055150.png";
import slide42 from "../imports/Screenshot_2026-04-29_055229.png";
import slide43 from "../imports/Screenshot_2026-04-29_063449.png";
import slide44 from "../imports/Screenshot_2026-04-29_063505.png";
import slide45 from "../imports/Screenshot_2026-04-29_063523.png";




const slides = [
  {
    id: 1, src: slide1, label: "Slide 1",
    title: "Homepage – Hero Section",
    description: "This is the landing page of the Boarding House Management System. It welcomes visitors with a navigation bar (Home, Boarding Houses, Login) and a hero banner that highlights the system's purpose — helping users find and manage boarding houses in Pagadian, Zamboanga Del Sur."
  },
  {
    id: 2, src: slide2, label: "Slide 2",
    title: "Popular Boarding Houses",
    description: "This section displays a curated list of popular boarding houses available in the area. Each card shows the boarding house name, location, number of beds and baths, and a 'See Details' button. Users can browse and navigate using Prev/Next pagination controls."
  },
  {
    id: 3, src: slide3, label: "Slide 3",
    title: "Available Rooms",
    description: "This section shows all currently available rooms across different boarding houses. Each room card displays the price (₱6,000/month), number of spaces left, room number, boarding house name, bed count, and gender restriction (Male/Female Only), helping tenants find the right fit."
  },
  {
    id: 4, src: slide4, label: "Slide 4",
    title: "Room Detail Page",
    description: "This is the full detail view of a specific room. It shows the room photo, price, availability status, boarding house location, a description, bed count, gender preference, and the property owner's contact information — giving prospective tenants everything they need to decide."
  },
  {
    id: 5, src: slide5, label: "Slide 5",
    title: "Send an Inquiry Form",
    description: "This form allows interested tenants to send a direct inquiry to the administrator. Users fill in their Full Name, Email Address, Contact Number, and a message describing what they're looking for. The system promises fast response and verified listings."
  },
  {
    id: 6, src: slide6, label: "Slide 6",
    title: "Login Page",
    description: "This is the authentication page for both owners and tenants. Users enter their Username or Email and Password to access the system. It also provides a 'Forgot Password?' link for account recovery and a 'Create an Account' option for new users."
  },
  {
    id: 7, src: slide7, label: "Slide 7",
    title: "Create an Account – Registration Form",
    description: "New users register here by providing their First Name, Last Name, Username, Email, Password, and role (Tenant/Resident). They can also optionally select a vacant room during sign-up, or leave it for the owner to assign later."
  },
  {
    id: 8, src: slide8, label: "Slide 8",
    title: "Account Recovery",
    description: "This page helps users recover their account if they forget their password. Users enter their username to begin the recovery process, which uses a pre-set security question to verify their identity before allowing a password reset."
  },
  {
    id: 9, src: slide9, label: "Slide 9",
    title: "Security Question Verification",
    description: "As part of account recovery, users must correctly answer their pre-set security question (e.g., 'What is your favorite color?') to verify their identity. If they can't answer, they are directed to contact the administrator for manual assistance."
  },
  {
    id: 10, src: slide10, label: "Slide 10",
    title: "Admin / Owner Dashboard",
    description: "This is the main dashboard for the property owner (admin). It gives an overview of key metrics: Total Revenue (₱82,399.77), Active Tenants (15), Properties (4), and Total Units (9). It also shows an Issue Trends chart for automated complaint volume tracking."
  },
  {
    id: 11, src: slide11, label: "Slide 11",
    title: "Notice Board",
    description: "The Notice Board allows the admin to post announcements or reminders to tenants of specific boarding houses. Each notice shows the date, title, message preview, and which boarding house it targets. Admins can view or delete any notice entry."
  },
  {
    id: 12, src: slide12, label: "Slide 12",
    title: "Messages & Feedback (Chat)",
    description: "This is the real-time messaging system between the owner/admin and tenants. The left panel lists all tenants available to chat, while the right panel shows the conversation thread. Admins can type, send messages, and attach images to communicate directly with tenants."
  },
  {
    id: 13, src: slide13, label: "Slide 13",
    title: "User Inquiries – Inquiry Management",
    description: "This admin panel shows all room inquiries submitted by prospective tenants through the public inquiry form. Each entry includes the date, full name, contact number, message, and approval status. Admins can manage, reply via email, or delete each inquiry."
  },
  {
    id: 14, src: slide14, label: "Slide 14",
    title: "Inquiry Detail – Review & Action Modal",
    description: "When an admin clicks 'Manage' on an inquiry, this modal opens showing the full details: sender name, email, contact number, and their inquiry message. The admin can write a reply or internal notes, then choose to Save the reply, Approve, or Reject the inquiry."
  },
  {
    id: 15, src: slide15, label: "Slide 15",
    title: "Complaints & Maintenance",
    description: "This module tracks tenant complaints and maintenance requests. When no active issues exist, it shows a 'No Active Issues' confirmation. The Summary Overview panel on the right displays the count of active tasks and provides access to the archive of resolved issues."
  },
  {
    id: 16, src: slide16, label: "Slide 16",
    title: "Boarding House Management",
    description: "This admin panel lists all registered boarding houses with key details: ID, Name, Address, number of Rooms, Beds, Baths, WiFi status (ON/OFF), and a preview image. Admins can view details or delete a boarding house, and add new ones via the 'Add Boarding House' button."
  },
  {
    id: 17, src: slide17, label: "Slide 17",
    title: "Tenants Management",
    description: "This section shows all registered tenants in the system. Each row displays the tenant's profile photo, name, email, contact number, and address. Admins can edit tenant information or remove a tenant from the system using the action buttons."
  },
  {
    id: 18, src: slide18, label: "Slide 18",
    title: "Rooms – Room Listings",
    description: "This page shows all rooms across all boarding houses in a table format. Each entry lists the boarding house name, room name/number, price, bed count, gender assignment (Male/Female Only), vacancy status (Full/Vacant), and a room image. Admins can filter by boarding house and add new rooms."
  },
  {
    id: 19, src: slide19, label: "Slide 19",
    title: "Room Management – Tenant Assignments",
    description: "This module tracks which tenants are assigned to which rooms. The table shows the assignment ID, tenant name, boarding house, room ID, room number, and the date the tenant started. Admins can edit or remove room assignments and use 'Assign Rooms' to place tenants into rooms."
  },
  {
    id: 20, src: slide20, label: "Slide 20",
    title: "Utility Bills Tracker",
    description: "This dashboard manages utility expenses for each boarding house. It displays summary cards for Internet, Water, Gas, Electricity, Cable, and Other charges. Below is the Utility Payment Ledger showing which tenant paid, utility type, amount, payment date, status, and reference number."
  },
  {
    id: 21, src: slide21, label: "Slide 21",
    title: "Collectibles – Tenant Balance Tracker",
    description: "This table tracks each tenant's financial standing. It shows the tenant name, due date, room, monthly due, previous balance, total due, amount paid, and current balance. Negative balances (e.g., -₱7,399.98) indicate overpayments or credits, helping the admin monitor who has outstanding dues."
  },
  {
    id: 22, src: slide22, label: "Slide 22",
    title: "Transient Payments",
    description: "This panel manages short-term or transient tenant payments. The table includes columns for Days stayed, Tenant name, Room, Amount, Note, and Actions. Admins can add new transient payment entries via the 'Add Payments' button. Currently shows 'No data available' when no transient records exist."
  },
  {
    id: 23, src: slide23, label: "Slide 23",
    title: "Consolidated Income Report",
    description: "This is a printable financial report generated by the system. It shows the Total Income (₱82,399.77), number of Transactions (28), and an AUDITED status badge. Below is the Consolidated Transaction List showing each payment's date, payer name, type (Tenant Payment), category (e.g., Utility Charge), room, and amount."
  },
  {
    id: 24, src: slide24, label: "Slide 24",
    title: "My Profile – Admin Profile Management",
    description: "This page allows the admin (Ken Magalona) to manage their personal profile. It shows their profile photo with a camera icon for updating it, a 'Take Photo with Camera' option, and editable fields for First Name, Last Name, and Email Address. This keeps admin account information accurate and up to date."
  },
  {
    id: 25, src: slide25, label: "Slide 25",
    title: "Document Management – Tenant Credentials",
    description: "This module stores and manages tenant identification documents such as Driver's Licenses and NBI Clearances. Each entry displays the tenant name, document type, upload date, and approval status (Approved). Admins can view, reject, or delete documents to ensure all tenants have verified valid IDs on file."
  },
  {
    id: 26, src: slide26, label: "Slide 26",
    title: "Tenant Portal – Dashboard (Tenant View)",
    description: "This is the main dashboard visible to tenants after logging in. It greets the tenant by name (Hello, Joemar) and shows four key info cards: Property (Jpord Boarding House), Room No. (Room 1), Started On (Apr 19, 2026), and Next Payment due (May 16, 2026 – marked DUE). Recent Notices and a Service panel are also shown below."
  },
  {
    id: 27, src: slide27, label: "Slide 27",
    title: "Tenant Notice Board (Tenant View)",
    description: "This is the tenant-facing Notice Board where tenants can read announcements posted by the admin. Each entry shows the date, notice title, message preview, and the target boarding house. Tenants can click the eye icon to read the full notice. Notices are visible only to tenants of the specified boarding house."
  },
  {
    id: 28, src: slide28, label: "Slide 28",
    title: "Tenant Messages & Feedback (Tenant View)",
    description: "This is the tenant-facing chat interface. Tenants can send messages to the Property Owner (Management) or the System Admin (Support). The right panel shows the active chat thread. Tenants can type a message, attach files/images, and send — enabling direct two-way communication with management."
  },
  {
    id: 29, src: slide29, label: "Slide 29",
    title: "Tenant Complaints & Maintenance (Tenant View)",
    description: "This is the complaint submission page for tenants. Tenants can click 'Report Issue' to file a complaint or maintenance request. When no active issues are present, a green checkmark confirms 'No Active Issues.' The Summary Overview panel shows the current Active Tasks count and a 'View Archive' button for past resolved issues."
  },
  {
    id: 30, src: slide30, label: "Slide 30",
    title: "Cash In – Load Wallet Modal",
    description: "This modal appears when a tenant clicks to load their in-app wallet for paying rent or utilities. Tenants choose between GCash or Card/Stripe as the payment method, then enter the amount (e.g., ₱5,000). A security note confirms 'Your transaction is secured by GCash.' Clicking PROCEED initiates the payment process."
  },
  {
    id: 31, src: slide40, label: "Slide 31",
    title: "GCash Receipt – Payment Confirmation",
    description: "This is a sample GCash receipt generated after a successful 'Cash In' or rent payment. It displays the amount sent (₱5,000.00), the recipient (JPORD Boarding House), date and time, and a unique reference number. It also includes an environmental impact note for going digital."
  },
  {
    id: 32, src: slide41, label: "Slide 32",
    title: "Pay Rent / Bills Modal",
    description: "This interface allows tenants to pay their outstanding rent or utility balance. Users can choose between GCash and Card/Stripe, select the bill type (e.g., Rent), and enter the amount to pay. The system ensures secure transactions through integrated payment gateways."
  },
  {
    id: 33, src: slide42, label: "Slide 33",
    title: "Stripe – Card Payment Integration",
    description: "This is the Stripe/Link payment gateway integration. Tenants can securely pay their rent using their Mastercard or other credit/debit cards. The 'Sandbox' badge indicates this is a secure testing environment, ensuring the payment logic works perfectly before going live."
  },
  {
    id: 34, src: slide31, label: "Slide 34",
    title: "Staff Dashboard – Task Performance Analytics",
    description: "This is the main dashboard for the staff members. It displays key performance metrics including Total Tasks (28), Pending (5), In Progress (0), Resolved (23), and Rejected (0). It also features a Task Performance Analytics chart for monitoring staff efficiency and workload trends."
  },
  {
    id: 35, src: slide39, label: "Slide 35",
    title: "Staff – My Profile",
    description: "Staff profile management page. Staff members can view and update their personal information, including their profile photo and account details, ensuring their professional identity is correctly represented within the system."
  },
  {
    id: 36, src: slide38, label: "Slide 36",
    title: "Staff – Messaging & Support",
    description: "Staff members can communicate with the System Admin or Property Owner via this chat interface. It facilitates internal communication within the management team, allowing staff to report issues or ask for guidance while performing their duties."
  },
  {
    id: 37, src: slide37, label: "Slide 37",
    title: "Staff – Assigned Complaints",
    description: "This view shows complaints specifically assigned to the logged-in staff member (e.g., Janwin Umban). It includes details about the issue, its urgency status, and allows the staff to update the task status to Pending, In Progress, Resolved, or Delayed."
  },
  {
    id: 38, src: slide36, label: "Slide 38",
    title: "Staff – Document Management",
    description: "The staff-facing document management portal. Staff members can upload new valid IDs (PH Valid IDs) for tenants and track the status of their own uploaded documents. This ensures a streamlined process for collecting and verifying tenant credentials."
  },
  {
    id: 39, src: slide43, label: "Slide 39",
    title: "Super Admin – System Overview Dashboard",
    description: "This is the Super Admin's high-level dashboard. It provides a monitoring view of the entire platform's health, including Total Users (22), System Owners (1), Boarding Houses (4), and Total Rooms (9). It also features a System Distribution chart for real-time resource allocation."
  },
  {
    id: 40, src: slide44, label: "Slide 40",
    title: "Admin – Users Management",
    description: "This panel allows administrators to manage all system users. It lists every account with their profile photo, username, full name, email, and role (Admin/Tenant). Admins can add new users, edit existing ones, or remove accounts to maintain system security."
  },
  {
    id: 41, src: slide45, label: "Slide 41",
    title: "Admin – User Activity Logs",
    description: "The system activity log tracks every login and logout event. It records the user name, their role, the specific action taken, their IP address, and the exact time and date. This audit trail is essential for security monitoring and troubleshooting user sessions."
  },
  {
    id: 42, src: slide35, label: "Slide 42",
    title: "Admin – Messages & Feedback",
    description: "The real-time chat interface for admins to communicate with tenants. This screen shows active conversations with tenants like Ken Magalona and Orlando Lao. Admins can provide support, answer questions, and handle requests directly through this integrated messaging system."
  },
  {
    id: 43, src: slide34, label: "Slide 43",
    title: "Admin – Complaints & Maintenance (Resolved)",
    description: "The complaints management module for admins. This view shows 'No Active Issues', indicating that all maintenance requests and complaints have been resolved. The summary panel on the right tracks the current workload and provides access to the history of past issues."
  },
  {
    id: 44, src: slide33, label: "Slide 44",
    title: "Admin – Tenants Overview",
    description: "A comprehensive list of all tenants registered in the system. It displays profile photos, names, email addresses, contact numbers, and their specific addresses. This centralized view allows admins to manage tenant information and track who is currently staying in the properties."
  },
  {
    id: 45, src: slide32, label: "Slide 45",
    title: "Admin – Document Management",
    description: "The admin view for managing tenant documents. This table lists all uploaded credentials (NBI, Driver's License) with their upload date and approval status. Admins can view the documents or take action (Approve/Reject) to ensure all tenants are properly verified."
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, isFullscreen]);

  const slide = slides[current];

  return (
    <div
      className="flex flex-col bg-gray-900"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {/* ── Top Bar ── */}
      {!isFullscreen && (
        <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 bg-gray-800/80 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-500/5 rounded-lg">
              <svg className="w-5 h-5 text-blue-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-white font-bold text-base tracking-tight">BHMS <span className="text-blue-400 font-normal">System</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">{current + 1} / {slides.length}</span>
            <button
              onClick={() => setIsFullscreen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Present
            </button>
          </div>
        </div>
      )}

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Thumbnail Sidebar */}
        {!isFullscreen && (
          <div
            className="flex-shrink-0 border-r border-gray-700/50 overflow-y-auto flex flex-col gap-3 p-3 scrollbar-hide"
            style={{ width: 180, backgroundColor: "#0f131a" }}
          >
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`relative w-full rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                  current === i
                    ? "border-blue-400 shadow-lg shadow-blue-900/40"
                    : "border-transparent hover:border-gray-500"
                }`}
              >
                <img src={s.src} alt={s.label} className="w-full object-cover aspect-video" />
                <div className={`absolute bottom-0 left-0 right-0 text-center py-0.5 text-xs ${current === i ? "bg-blue-600 text-white" : "bg-black/60 text-gray-300"}`}>
                  {i + 1}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Center: image + description stacked */}
        <div className="flex-1 flex flex-col" style={{ overflow: "hidden", backgroundColor: "#0d1117" }}>

          {/* Slide Image */}
          <div className="flex items-center justify-center bg-gray-950" style={{ flex: "1 1 0", overflow: "hidden", padding: "16px 16px 8px" }}>
            {isFullscreen ? (
              <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                <img
                  key={current}
                  src={slide.src}
                  alt={slide.label}
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", animation: "fadeIn 0.2s ease" }}
                />
                <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                <button onClick={() => setIsFullscreen(false)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
                  ))}
                </div>
              </div>
            ) : (
              <img
                key={current}
                src={slide.src}
                alt={slide.label}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.5)", animation: "fadeIn 0.2s ease" }}
              />
            )}
          </div>

          {/* ── Description Box ── always visible below the image */}
          {!isFullscreen && (
            <div
              key={`desc-${current}`}
              className="flex-shrink-0 border-t border-gray-700"
              style={{ backgroundColor: "#141927", padding: "14px 20px", animation: "fadeIn 0.3s ease" }}
            >
              <div className="flex items-start gap-3">
                {/* Badge */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg border border-blue-500/30"
                  style={{ width: 36, height: 36, backgroundColor: "rgba(37,99,235,0.08)", marginTop: 2 }}
                >
                  <span style={{ color: "#60a5fa", opacity: 0.7, fontSize: 13, fontWeight: 700 }}>{current + 1}</span>
                </div>
                {/* Text */}
                <div>
                  <p style={{ color: "#ffffff", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                    {slide.title}
                  </p>
                  <p style={{ color: "#9ca3af", fontSize: 12.5, lineHeight: 1.65 }}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      {!isFullscreen && (
        <div className="flex-shrink-0 flex items-center justify-center gap-4 px-6 py-3 bg-gray-800 border-t border-gray-700">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="flex items-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm rounded-md transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Previous
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${i === current ? "w-5 h-2 bg-blue-400" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={current === slides.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm rounded-md transition-colors"
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}