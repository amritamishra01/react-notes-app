// // import { Button, Card, CardBody, Heading, VStack, Text, Flex, HStack, CardHeader, CardFooter } from "@chakra-ui/react"
// // import "./notestyle.css"
// // import { useEffect, useRef, useState } from "react"
// // import { useDispatch } from "react-redux"
// // import { deleteNotes, updateNotes } from "../../../redux/notes/note_actions"
// // import {
// //     Modal,
// //     ModalOverlay,
// //     ModalContent,
// //     ModalHeader,
// //     ModalFooter,
// //     ModalBody,
// //     ModalCloseButton,
// //     Input,
// //     Textarea,
// //     useDisclosure
// // } from "@chakra-ui/react";

// // export default function NoteCard({title, body, user, _id}){
    
// //     const dispatch = useDispatch()
// //     const { isOpen, onOpen, onClose } = useDisclosure()
// //     const initialRef = useRef(null)
// //     const finalRef = useRef(null)
// //     const [notes, setNotes] = useState([])
// //     const [tempTitle, setTitle] = useState(title)
// //     const [tempBody, setBody] = useState(body)
// //     const updateNote = ()=>{
// //         dispatch(updateNotes(_id, {title: tempTitle, body: tempBody}))
// //         onClose()
// //     }

// //     return <Card className="card" align={"center"} size='md'>
// //         <CardHeader height={"20%"} alignItems={'center'}>
// //             <Heading size='xl' noOfLines={1}>{title}</Heading>
// //         </CardHeader>
// //         <CardBody mt={"10px"} height = {"50%"}>
// //             <Text noOfLines={"8"}>{body}</Text>
// //         </CardBody>
// //         <CardFooter height={"30%"}>
// //             <HStack width = {"100%"}>
// //                 <>
// //                 <Button bgColor={"#00e9bf"} onClick={onOpen}>Update</Button>
// //                     <Modal
// //                     initialFocusRef={initialRef}
// //                     finalFocusRef={finalRef}
// //                     isOpen={isOpen}
// //                     onClose={onClose}
// //                     >
// //                     <ModalOverlay />
// //                     <ModalContent>
// //                         <ModalHeader>Update Note</ModalHeader>
// //                         <ModalCloseButton />
// //                         <ModalBody pb={6}>

// //                             <Input value={tempTitle}m placeholder={title} onChange={(e)=>setTitle(e.target.value)}></Input>
// //                             <Textarea mt={8} value={tempBody} placeholder={body} onChange={(e)=>setBody(e.target.value)}></Textarea>
                        
// //                         </ModalBody>

// //                         <ModalFooter>
// //                         <Button colorScheme="blue" mr={3} onClick={updateNote}>
// //                             Update
// //                         </Button>
// //                         <Button onClick={onClose}>Cancel</Button>
// //                         </ModalFooter>
// //                     </ModalContent>
// //                     </Modal>
// //                 </>
// //                 <Button bgColor={"#00e9bf"} onClick={()=>{
// //                     dispatch(deleteNotes(_id))
// //                 }}>Delete</Button>
// //             </HStack>
// //         </CardFooter>
// //     </Card>
// // }

// import {
//   Button,
//   Card,
//   CardBody,
//   Heading,
//   Text,
//   HStack,
//   CardHeader,
//   CardFooter,
//   Input,
//   Textarea,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton
// } from "@chakra-ui/react";
// import "./notestyle.css";
// import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteNotes, updateNotes } from "../../../redux/notes/note_actions";

// export default function NoteCard({ title, body, _id }) {
//   const dispatch = useDispatch();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = useRef(null);
//   const finalRef = useRef(null);

//   const [tempTitle, setTitle] = useState(title);
//   const [tempBody, setBody] = useState(body);

//   const updateNote = () => {
//     dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
//     onClose();
//   };

//   return (
//     <Card className="card" align="center" size="md">
//       <CardHeader height="20%" alignItems="center">
//         <Heading size="xl" noOfLines={1}>
//           {typeof title === "string" ? title : JSON.stringify(title)}
//         </Heading>
//       </CardHeader>

//       <CardBody mt="10px" height="50%">
//         <Text noOfLines={8}>
//           {typeof body === "string" ? body : JSON.stringify(body)}
//         </Text>
//       </CardBody>

//       <CardFooter height="30%">
//         <HStack width="100%">
//           <Button bgColor="#00e9bf" onClick={onOpen}>
//             Update
//           </Button>

//           {/* Update Modal */}
//           <Modal
//             initialFocusRef={initialRef}
//             finalFocusRef={finalRef}
//             isOpen={isOpen}
//             onClose={onClose}
//           >
//             <ModalOverlay />
//             <ModalContent>
//               <ModalHeader>Update Note</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody pb={6}>
//                 <Input
//                   value={tempTitle}
//                   placeholder="Enter title"
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <Textarea
//                   mt={8}
//                   value={tempBody}
//                   placeholder="Enter description"
//                   onChange={(e) => setBody(e.target.value)}
//                 />
//               </ModalBody>

//               <ModalFooter>
//                 <Button colorScheme="blue" mr={3} onClick={updateNote}>
//                   Update
//                 </Button>
//                 <Button onClick={onClose}>Cancel</Button>
//               </ModalFooter>
//             </ModalContent>
//           </Modal>

//           <Button
//             bgColor="#00e9bf"
//             onClick={() => {
//               dispatch(deleteNotes(_id));
//             }}
//           >
//             Delete
//           </Button>
//         </HStack>
//       </CardFooter>
//     </Card>
//   );
// }




// import {
//   Button,
//   Card,
//   CardBody,
//   Heading,
//   Text,
//   HStack,
//   CardHeader,
//   CardFooter,
//   Input,
//   Textarea,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton
// } from "@chakra-ui/react";
// import "./notestyle.css";
// import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteNotes, updateNotes } from "../../../redux/notes/note_actions";

// export default function NoteCard({ title, body, _id }) {
//   const dispatch = useDispatch();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = useRef(null);
//   const finalRef = useRef(null);

//   const [tempTitle, setTitle] = useState(title);
//   const [tempBody, setBody] = useState(body);

//   const updateNote = () => {
//     dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
//     onClose();
//   };

//   return (
//     <Card className="card" align="center" size="md">
//       <CardHeader height="20%" alignItems="center">
//         <Heading size="xl" noOfLines={1}>
//           {title}
//         </Heading>
//       </CardHeader>

//       <CardBody mt="10px" height="50%">
//         <Text noOfLines={8}>{body}</Text>
//       </CardBody>

//       <CardFooter height="30%">
//         <HStack width="100%">
//           <Button bgColor="#00e9bf" onClick={onOpen}>
//             Update
//           </Button>

//           {/* Update Modal */}
//           <Modal
//             initialFocusRef={initialRef}
//             finalFocusRef={finalRef}
//             isOpen={isOpen}
//             onClose={onClose}
//           >
//             <ModalOverlay />
//             <ModalContent>
//               <ModalHeader>Update Note</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody pb={6}>
//                 <Input
//                   value={tempTitle}
//                   placeholder="Enter title"
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <Textarea
//                   mt={8}
//                   value={tempBody}
//                   placeholder="Enter description"
//                   onChange={(e) => setBody(e.target.value)}
//                 />
//               </ModalBody>

//               <ModalFooter>
//                 <Button colorScheme="blue" mr={3} onClick={updateNote}>
//                   Update
//                 </Button>
//                 <Button onClick={onClose}>Cancel</Button>
//               </ModalFooter>
//             </ModalContent>
//           </Modal>

//           <Button
//             bgColor="#00e9bf"
//             onClick={() => {
//               dispatch(deleteNotes(_id));
//             }}
//           >
//             Delete
//           </Button>
//         </HStack>
//       </CardFooter>
//     </Card>
//   );
// }



import {
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  HStack,
  CardHeader,
  CardFooter,
  Input,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import "./notestyle.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../redux/notes/note_actions";

export default function NoteCard({ title, body, _id }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote = () => {
    dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
    onClose();
  };

  return (
    <Card
      className="card"
      align="center"
      size="md"
      w={{ base: "100%", sm: "90%", md: "350px" }} // ✅ responsive width
      maxW="100%"
    >
      {/* Title */}
      <CardHeader height="20%" alignItems="center">
        <Heading size="md" noOfLines={1} wordBreak="break-word">
          {title}
        </Heading>
      </CardHeader>

      {/* Body */}
      <CardBody mt="10px" height="50%">
        <Text noOfLines={5} wordBreak="break-word" whiteSpace="pre-wrap">
          {body}
        </Text>
      </CardBody>

      {/* Buttons */}
      <CardFooter height="30%">
        <HStack width="100%" justify="space-between">
          <Button size="sm" bgColor="#00e9bf" onClick={onOpen}>
            Update
          </Button>

          {/* Update Modal */}
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="md" // ✅ not too wide
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Note</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Input
                  ref={initialRef}
                  value={tempTitle}
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={50} // ✅ title limit
                />
                <Textarea
                  mt={8}
                  value={tempBody}
                  placeholder="Enter description"
                  onChange={(e) => setBody(e.target.value)}
                  resize="vertical"
                  maxLength={500} // ✅ description limit
                  overflowWrap="break-word"
                  whiteSpace="pre-wrap"
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={updateNote}>
                  Update
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Button
            size="sm"
            bgColor="#00e9bf"
            onClick={() => {
              dispatch(deleteNotes(_id));
            }}
          >
            Delete
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}
