// import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getNotes, createNotes } from "../redux/notes/note_actions";
// import NoteCard from "../components/Notes/NoteCard/NoteCard";
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
// } from "@chakra-ui/react";

// export default function Notespage()
// {
//     const dispatch = useDispatch()
//     const {loading, error, data} = useSelector((state)=>state.noteReducer)
//     const [notes, setNotes] = useState([])
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const initialRef = useRef(null)
//     const finalRef = useRef(null)
//     const [title, setTitle] = useState("")
//     const [body, setBody] = useState("")

//     useEffect(()=>{
//         dispatch(getNotes())
//     }, [])

//     useEffect(()=>{
//         setNotes(data)
//     }, [data])

//     const createNote = ()=>{
//         dispatch(createNotes({title, body}))
//         onClose()
//     }

//     return <Box mt={20} padding={8}>
//         <Grid gap={10} w={"100%"} margin={"auto"} gridTemplateColumns="repeat(4, 1fr)">
//             {notes?.map((el)=><NoteCard {...el}/>)}
//         </Grid>
//         <>
//         <IconButton boxShadow={"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"} position={"fixed"} w={"100px"} h={"100px"} bg={"#5b9cf2"} bottom={0} right={0} margin={16} icon={<AddIcon fontSize={30} />} 
//         onClick={onOpen}></IconButton>
//         <Modal
//           initialFocusRef={initialRef}
//           finalFocusRef={finalRef}
//           isOpen={isOpen}
//           onClose={onClose}
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Create New Note</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody pb={6}>

//                 <Input value={title}m placeholder="Please enter title" onChange={(e)=>setTitle(e.target.value)}></Input>
//                 <Textarea mt={8} value={body} placeholder={'Please enter description'} onChange={(e)=>setBody(e.target.value)}></Textarea>
              
//             </ModalBody>

//             <ModalFooter>
//               <Button colorScheme="blue" mr={3} onClick={createNote}>
//                 Create
//               </Button>
//               <Button onClick={onClose}>Cancel</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//         </>
//     </Box>
// }

// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   Input,
//   Textarea,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getNotes, createNotes } from "../redux/notes/note_actions";
// import NoteCard from "../components/Notes/NoteCard/NoteCard";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";

// export default function Notespage() {
//   const dispatch = useDispatch();
//   const { loading, error, data } = useSelector((state) => state.noteReducer);

//   const [notes, setNotes] = useState([]);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = useRef(null);
//   const finalRef = useRef(null);

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   useEffect(() => {
//     dispatch(getNotes());
//   }, [dispatch]);

//   useEffect(() => {
//     setNotes(data);
//   }, [data]);

//   const createNote = () => {
//     if (!title.trim() || !body.trim()) return; // avoid empty notes
//     dispatch(createNotes({ title, body }));
//     setTitle(""); // reset inputs
//     setBody("");
//     onClose();
//   };

//   return (
//     <Box mt={20} padding={8}>
//       <Grid
//         gap={10}
//         w={"100%"}
//         margin={"auto"}
//         gridTemplateColumns="repeat(4, 1fr)"
//       >
//         {notes?.map((el) => (
//           <NoteCard key={el.id || el._id} {...el} />
//         ))}
//       </Grid>

//       {/* Floating Add Button */}
//       <IconButton
//         boxShadow={
//           "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
//         }
//         position={"fixed"}
//         w={"100px"}
//         h={"100px"}
//         bg={"#5b9cf2"}
//         bottom={0}
//         right={0}
//         margin={16}
//         icon={<AddIcon fontSize={30} />}
//         onClick={onOpen}
//       />

//       {/* Modal for New Note */}
//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create New Note</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Input
//               ref={initialRef}
//               value={title}
//               placeholder="Please enter title"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <Textarea
//               mt={8}
//               value={body}
//               placeholder="Please enter description"
//               onChange={(e) => setBody(e.target.value)}
//             />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={createNote}>
//               Create
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }



// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   Input,
//   Textarea,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getNotes, createNotes } from "../redux/notes/note_actions";
// import NoteCard from "../components/Notes/NoteCard/NoteCard";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";

// export default function Notespage() {
//   const dispatch = useDispatch();
//   const { loading, error, data } = useSelector((state) => state.noteReducer);

//   const [notes, setNotes] = useState([]);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = useRef(null);
//   const finalRef = useRef(null);

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   useEffect(() => {
//     dispatch(getNotes());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log("Notes data from API:", data); // 👈 log API response
//     setNotes(data);
//   }, [data]);

//   const createNote = () => {
//     if (!title.trim() || !body.trim()) return; // avoid empty notes
//     dispatch(createNotes({ title, body }));
//     setTitle(""); // reset inputs
//     setBody("");
//     onClose();
//   };

//   return (
//     <Box mt={20} padding={8}>
//       <Grid
//         gap={10}
//         w={"100%"}
//         margin={"auto"}
//         gridTemplateColumns="repeat(4, 1fr)"
//       >
//        {notes?.map((el, idx) => {
//   console.log("Rendering note:", el); // check shape
//   return (
//     <NoteCard 
//       key={el.id || el._id || idx} 
//       title={el.title} 
//       body={el.body} 
//       _id={el._id} 
//     />
//   );
// })}

//       </Grid>

//       {/* Floating Add Button */}
//       <IconButton
//         boxShadow={
//           "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
//         }
//         position={"fixed"}
//         w={"100px"}
//         h={"100px"}
//         bg={"#5b9cf2"}
//         bottom={0}
//         right={0}
//         margin={16}
//         icon={<AddIcon fontSize={30} />}
//         onClick={onOpen}
//       />

//       {/* Modal for New Note */}
//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create New Note</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Input
//               ref={initialRef}
//               value={title}
//               placeholder="Please enter title"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <Textarea
//               mt={8}
//               value={body}
//               placeholder="Please enter description"
//               onChange={(e) => setBody(e.target.value)}
//             />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={createNote}>
//               Create
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }



// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   Input,
//   Textarea,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getNotes, createNotes } from "../redux/notes/note_actions";
// import NoteCard from "../components/Notes/NoteCard/NoteCard";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import { LOGOUT } from "../redux/users/user_types";
// import { useNavigate } from "react-router-dom"; 

// export default function Notespage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); 
//   const { loading, error, data } = useSelector((state) => state.noteReducer);
//   const { user } = useSelector((state) => state.userReducer);

//   const [notes, setNotes] = useState([]);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = useRef(null);
//   const finalRef = useRef(null);

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   // ✅ Logout handler
//   const handleLogout = () => {
//     dispatch({ type: LOGOUT });
//     localStorage.removeItem("token");
//     window.location.href = "/login"; // redirect to login page
//   };

//   useEffect(() => {
//     dispatch(getNotes());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log("Notes data from API:", data);
//     setNotes(data);
//   }, [data]);

//   const createNote = () => {
//     if (!title.trim() || !body.trim()) return; // avoid empty notes
//     dispatch(createNotes({ title, body }));
//     setTitle("");
//     setBody("");
//     onClose();
//   };

//   const isFreeTenant = user?.tenant?.plan === "FREE";
//   const reachedFreeLimit = isFreeTenant && notes.length >= 3;

//   return (
//     <Box mt={20} padding={8}>
//       {/* ================= Tenant / Role Banner ================= */}
//       {user && (
//         <Box
//           mb={8}
//           p={6}
//           borderRadius="xl"
//           boxShadow="md"
//           bgGradient="linear(to-r, blue.400, teal.300)"
//           color="white"
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           {/* Left side info */}
//           <Box>
//             <Text fontSize="2xl" fontWeight="bold">
//               {user.tenant?.name}
//             </Text>
//             <Text fontSize="md">
//               Role: <b>{user.role}</b>
//             </Text>
//           </Box>

//           {/* Plan badge */}
//           <Box>
//             <Button
//               size="sm"
//               borderRadius="full"
//               colorScheme={user.tenant?.plan === "PRO" ? "green" : "yellow"}
//               variant="solid"
//             >
//               {user.tenant?.plan}
//             </Button>
//           </Box>

//           {/* Logout */}
//           <Button
//             size="sm"
//             colorScheme="red"
//             ml={4}
//             onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </Box>
//       )}

//       {/* ================= Notes Grid ================= */}
//       <Grid
//         gap={10}
//         w={"100%"}
//         margin={"auto"}
//         gridTemplateColumns="repeat(4, 1fr)"
//       >
//         {notes?.map((el, idx) => {
//           console.log("Rendering note:", el);
//           return (
//             <NoteCard
//               key={el.id || el._id || idx}
//               title={el.title}
//               body={el.body}
//               _id={el._id}
//             />
//           );
//         })}
//       </Grid>

//       {/* ================= Add / Upgrade Buttons =================
//       {!reachedFreeLimit ? (
//         <IconButton
//           boxShadow={
//             "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
//           }
//           position={"fixed"}
//           w={"100px"}
//           h={"100px"}
//           bg={"#5b9cf2"}
//           bottom={0}
//           right={0}
//           margin={16}
//           icon={<AddIcon fontSize={30} />}
//           onClick={onOpen}
//         />
//       ) : (
//         // <Button
//         //   position={"fixed"}
//         //   bottom={0}
//         //   right={0}
//         //   margin={16}
//         //   size="lg"
//         //   colorScheme="purple"
//         //   borderRadius="full"
//         //   onClick={() => alert("Redirect to Upgrade Page (coming soon)")}
//         // >
//         //   Upgrade to PRO 🚀
//         // </Button>

// <Button
//   position={"fixed"}
//   bottom={0}
//   right={0}
//   margin={16}
//   size="lg"
//   colorScheme="purple"
//   borderRadius="full"
//   onClick={() => navigate("/upgrade")}   // 👈 navigate instead of alert
// >
//   Upgrade to PRO 🚀
// </Button>


//       )} */}







// {/* ================= Add / Upgrade Buttons ================= */}
// {isFreeTenant && reachedFreeLimit ? (
//   // Show upgrade if free user reached the limit
//   <Button
//     position={"fixed"}
//     bottom={0}
//     right={0}
//     margin={16}
//     size="lg"
//     colorScheme="purple"
//     borderRadius="full"
//     onClick={() => navigate("/upgrade")}   // 👈 navigate instead of alert
//   >
//     Upgrade to PRO 🚀
//   </Button>
// ) : (
//   // Otherwise show "Add Note" button
//   <IconButton
//     boxShadow={
//       "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
//     }
//     position={"fixed"}
//     w={"100px"}
//     h={"100px"}
//     bg={"#5b9cf2"}
//     bottom={0}
//     right={0}
//     margin={16}
//     icon={<AddIcon fontSize={30} />}
//     onClick={onOpen}
//   />
// )}





//       {/* ================= Modal for New Note ================= */}
//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create New Note</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Input
//               ref={initialRef}
//               value={title}
//               placeholder="Please enter title"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <Textarea
//               mt={8}
//               value={body}
//               placeholder="Please enter description"
//               onChange={(e) => setBody(e.target.value)}
//             />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={createNote}>
//               Create
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }





// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   Input,
//   Textarea,
//   Text,
//   Spinner,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getNotes, createNotes } from "../redux/notes/note_actions";
// import NoteCard from "../components/Notes/NoteCard/NoteCard";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import { LOGOUT } from "../redux/users/user_types";
// import { useNavigate } from "react-router-dom";

// export default function Notespage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading, error, data } = useSelector((state) => state.noteReducer);
//   const { user } = useSelector((state) => state.userReducer);

//   // ✅ Always default notes to empty array
//   const [notes, setNotes] = useState([]);

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = useRef(null);
//   const finalRef = useRef(null);

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   // ✅ Logout handler
//   const handleLogout = () => {
//     dispatch({ type: LOGOUT });
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   useEffect(() => {
//     dispatch(getNotes());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log("Notes data from API:", data);
//     setNotes(Array.isArray(data) ? data : []); // ✅ ensure array
//   }, [data]);

//   const createNote = () => {
//     if (!title.trim() || !body.trim()) return;
//     dispatch(createNotes({ title, body }));
//     setTitle("");
//     setBody("");
//     onClose();
//   };

//   // ✅ notes is always array now
//   const isFreeTenant = user?.tenant?.plan === "FREE";
//   const reachedFreeLimit = isFreeTenant && notes.length >= 3;

//   return (
//     <Box mt={20} padding={8}>
//       {/* ================= Tenant / Role Banner ================= */}
//       {user && (
//         <Box
//           mb={8}
//           p={6}
//           borderRadius="xl"
//           boxShadow="md"
//           bgGradient="linear(to-r, blue.400, teal.300)"
//           color="white"
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           {/* Left side info */}
//           <Box>
//             <Text fontSize="2xl" fontWeight="bold">
//               {user.tenant?.name}
//             </Text>
//             <Text fontSize="md">
//               Role: <b>{user.role}</b>
//             </Text>
//           </Box>

//           {/* Plan badge */}
//           <Box>
//             <Button
//               size="sm"
//               borderRadius="full"
//               colorScheme={user.tenant?.plan === "PRO" ? "green" : "yellow"}
//               variant="solid"
//             >
//               {user.tenant?.plan}
//             </Button>
//           </Box>

//           {/* Logout */}
//           <Button size="sm" colorScheme="red" ml={4} onClick={handleLogout}>
//             Logout
//           </Button>
//         </Box>
//       )}

//       {/* ================= Notes Grid ================= */}
//       {loading ? (
//         <Box textAlign="center" mt={10}>
//           <Spinner size="xl" />
//           <Text mt={4}>Loading notes...</Text>
//         </Box>
//       ) : error ? (
//         <Box textAlign="center" color="red.500" mt={10}>
//           <Text>Error loading notes 😢</Text>
//         </Box>
//       ) : (
//         <Grid
//           gap={10}
//           w={"100%"}
//           margin={"auto"}
//           gridTemplateColumns="repeat(4, 1fr)"
//         >
//           {notes.map((el, idx) => (
//             <NoteCard
//               key={el.id || el._id || idx}
//               title={el.title}
//               body={el.body}
//               _id={el._id}
//             />
//           ))}
//         </Grid>
//       )}


// {/* ================= Add / Upgrade Buttons ================= */}
// {isFreeTenant && reachedFreeLimit && user?.role?.toUpperCase() === "ADMIN" ? (
//   // Only ADMIN sees upgrade option when FREE limit reached
//   <Button
//     position={"fixed"}
//     bottom={0}
//     right={0}
//     margin={16}
//     size="lg"
//     colorScheme="purple"
//     borderRadius="full"
//     onClick={() => navigate("/upgrade")}
//   >
//     Upgrade to PRO 🚀
//   </Button>
// ) : (
//   // Both ADMIN and MEMBER can add notes (unless FREE limit reached for Member too)
//   <IconButton
//     boxShadow={
//       "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
//     }
//     position={"fixed"}
//     w={"100px"}
//     h={"100px"}
//     bg={"#5b9cf2"}
//     bottom={0}
//     right={0}
//     margin={16}
//     icon={<AddIcon fontSize={30} />}
//     onClick={onOpen}
//   />
// )}







//       {/* ================= Modal for New Note ================= */}
//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create New Note</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Input
//               ref={initialRef}
//               value={title}
//               placeholder="Please enter title"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <Textarea
//               mt={8}
//               value={body}
//               placeholder="Please enter description"
//               onChange={(e) => setBody(e.target.value)}
//             />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={createNote}>
//               Create
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }

import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Textarea,
  Text,
  Spinner,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, createNotes } from "../redux/notes/note_actions";
import NoteCard from "../components/Notes/NoteCard/NoteCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { LOGOUT } from "../redux/users/user_types";
import { useNavigate } from "react-router-dom";

export default function Notespage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, data } = useSelector((state) => state.noteReducer);
  const { user } = useSelector((state) => state.userReducer);

  const [notes, setNotes] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    setNotes(Array.isArray(data) ? data : []);
  }, [data]);

  const createNote = () => {
    if (!title.trim() || !body.trim()) return;
    dispatch(createNotes({ title, body }));
    setTitle("");
    setBody("");
    onClose();
  };

  const isFreeTenant = user?.tenant?.plan === "FREE";
  const reachedFreeLimit = isFreeTenant && notes.length >= 3;

  return (
    <Box mt={{ base: 16, md: 20 }} px={{ base: 4, md: 8 }}>
      {/* ================= Tenant / Role Banner ================= */}
      {user && (
        <Box
          mb={8}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          boxShadow="md"
          bgGradient="linear(to-r, blue.400, teal.300)"
          color="white"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            spacing={{ base: 4, md: 6 }}
          >
            {/* Info */}
            <Box>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                {user.tenant?.name}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Role: <b>{user.role}</b>
              </Text>
            </Box>

            {/* Plan badge */}
            <Button
              size={{ base: "xs", md: "sm" }}
              borderRadius="full"
              colorScheme={user.tenant?.plan === "PRO" ? "green" : "yellow"}
            >
              {user.tenant?.plan}
            </Button>

            {/* Logout */}
            <Button
              size={{ base: "xs", md: "sm" }}
              colorScheme="red"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      )}

      {/* ================= Notes Grid ================= */}
      {loading ? (
        <Box textAlign="center" mt={10}>
          <Spinner size="xl" />
          <Text mt={4}>Loading notes...</Text>
        </Box>
      ) : error ? (
        <Box textAlign="center" color="red.500" mt={10}>
          <Text>Error loading notes 😢</Text>
        </Box>
      ) : (
        <Grid
          gap={6}
          w="100%"
          templateColumns={{
            base: "repeat(1, 1fr)", // mobile
            sm: "repeat(2, 1fr)",   // small tablets
            md: "repeat(3, 1fr)",   // tablets/laptops
            lg: "repeat(4, 1fr)",   // desktop
          }}
        >
          {notes.map((el, idx) => (
            <NoteCard
              key={el.id || el._id || idx}
              title={el.title}
              body={el.body}
              _id={el._id}
            />
          ))}
        </Grid>
      )}

      {/* ================= Add / Upgrade Buttons ================= */}
      {isFreeTenant && reachedFreeLimit && user?.role?.toUpperCase() === "ADMIN" ? (
        <Button
          position="fixed"
          bottom={4}
          right={4}
          size={{ base: "sm", md: "lg" }}
          colorScheme="purple"
          borderRadius="full"
          onClick={() => navigate("/upgrade")}
        >
          Upgrade to PRO 🚀
        </Button>
      ) : (
        <IconButton
          boxShadow="lg"
          position="fixed"
          w={{ base: "60px", md: "80px", lg: "100px" }}
          h={{ base: "60px", md: "80px", lg: "100px" }}
          bottom={4}
          right={4}
          borderRadius="full"
          bg="#5b9cf2"
          icon={<AddIcon fontSize={{ base: 20, md: 24, lg: 30 }} />}
          onClick={onOpen}
        />
      )}

      {/* ================= Modal for New Note ================= */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              ref={initialRef}
              value={title}
              placeholder="Please enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              mt={8}
              value={body}
              placeholder="Please enter description"
              onChange={(e) => setBody(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createNote}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
