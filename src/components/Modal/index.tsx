import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  getTrendingRepositoriesTopics,
  recommendTopicsForRepo,
} from "src/services/utility";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onRemove: (value?: string) => void;
  onAdd: (value?: string) => void;
  title?: string;
  description?: string;
  single?: boolean;
}

const ModalComponent: FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  onRemove,
  onAdd,
  title,
  description,
  single,
}) => {
  const focus: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [isLargerThan653] = useMediaQuery("(min-width: 653px)");
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const shuffle = (array: any[]) => {
    return array.sort(() => Math.random() - Math.random());
  };

  useEffect(() => {
    (async () => {
      const suggestions = await recommendTopicsForRepo(title, description);
      setSuggestions(suggestions);
      const trending = await getTrendingRepositoriesTopics();
      setTrendingTopics(shuffle(trending));
    })();
  }, [title, description]);

  return (
    <Modal
      closeOnOverlayClick={false}
      initialFocusRef={focus}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalCloseButton />
        <ModalBody pb={6} h={"fit"}>
          <FormControl>
            <FormLabel>
              multiple topics could be added by comma (,) seperating them{" "}
            </FormLabel>
            <Input
              ref={focus}
              placeholder="topic(s)...example github, react, developer"
            />
          </FormControl>
          <Flex
            direction={isLargerThan653 ? "row" : "column"}
            h="fit"
            maxH={"55vh"}
            w={"100%"}
            marginY={8}
            gap={5}
          >
            {single && suggestions.length !== 0 && (
              <Flex direction={"column"} h="fit" w={"100%"}>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"sm"}
                  w={"100%"}
                  flexWrap={"nowrap"}
                >
                  Suggestions
                </Text>
                <Flex
                  direction={"column"}
                  h="fit"
                  maxH={"25vh"}
                  overflowY={"auto"}
                  w={"100%"}
                  columnGap={5}
                >
                  {suggestions.map((topic, idx) => (
                    <Flex
                      direction={"row"}
                      gap={5}
                      align={"center"}
                      _hover={{ cursor: "pointer", bgColor: "#D3D3D3" }}
                      onClick={() => {
                        if (!focus.current.value.split(",").includes(topic)) {
                          const topics = focus.current?.value;
                          const seperation = topics !== "" ? "," : "";
                          focus.current.value = topics + seperation + topic;
                        }
                      }}
                    >
                      <Text>•</Text>
                      <Text>{topic}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            )}
            {trendingTopics.length !== 0 && (
              <Flex direction={"column"} h="fit" w={"100%"}>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"sm"}
                  p={0}
                  w={"100%"}
                  flexWrap={"nowrap"}
                >
                  Trending Topics
                </Text>
                <Flex
                  direction={"column"}
                  h="fit"
                  maxH={"25vh"}
                  overflowY={"auto"}
                  w={"100%"}
                  columnGap={5}
                >
                  {trendingTopics.map((topic, idx) => (
                    <Flex
                      direction={"row"}
                      gap={5}
                      align={"center"}
                      _hover={{ cursor: "pointer", bgColor: "#D3D3D3" }}
                      onClick={() => {
                        if (!focus.current.value.split(",").includes(topic)) {
                          const topics = focus.current?.value;
                          const seperation = topics !== "" ? "," : "";
                          focus.current.value = topics + seperation + topic;
                        }
                      }}
                    >
                      <Text>•</Text>
                      <Text>{topic}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
          <Text fontStyle="italic" mt={7}>
            Topic(s) could also be removed by typing the topic correctly and
            clicking the 'Remove' button below
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={2}
            onClick={() => onAdd(focus.current?.value)}
          >
            Add
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            mr={3}
            onClick={() => onRemove(focus.current?.value)}
          >
            Remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
