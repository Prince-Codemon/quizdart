import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Question = ({ data, score, setScore, setComplete, sendQuiz }) => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const { correctAnswer, question, incorrectAnswers } = data[count];
  const [allAnswers, setAllAnswer] = useState([]);

  const quesHandle = async () => {
    if (count < data.length - 1) {
      if (answer === correctAnswer) {
        setScore(score + 1);
      }
      setCount(count + 1);
    } else {
      setComplete(true);
      if (answer === correctAnswer) {
        setScore(score + 1);
        await sendQuiz();
        return;
      }
      setComplete(true);
      await sendQuiz();
    }
  };
  useEffect(() => {
    setAllAnswer(
      [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
    );
  }, []);
  useEffect(() => {
    setAllAnswer(
      [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
    );
  }, [correctAnswer, incorrectAnswers]);

  return (
    <Box
      width={{ lg: "500px", sm: "90%" }}
      maxW="400px"
      className="responsive"
      padding="10px 20px"
      bg={"white"}
      boxShadow="base"
      display={"flex"}
      height="fit-content"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      borderRadius="10px"
    >
      <VStack m={"5px"}>
        <RadioGroup onChange={setAnswer} value={answer}>
          <Text fontWeight="bold" m="20px 0"  maxWidth={"400px"} fontSize="xl" key={question}>
            {question}
          </Text>
          <Stack direction="column" ml="10px" mb={"20px"}>
            {allAnswers.map((v, i) => (
              <Radio key={i} value={v} maxWidth="400px">
                {v}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </VStack>
      <Button
        width={"100%"}
        margin="10px auto"
        colorScheme={"messenger"}
        onClick={quesHandle}
      >
        Next
      </Button>
    </Box>
  );
};

export default Question;
