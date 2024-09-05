"use client";
import { Container, Text, Title, Rating, Textarea, Button, Divider, Group, Pagination } from "@mantine/core";


import Footer from "@components/Footer";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      
      {/* <Space h="sm"/> */}
      <Title order={4} mt="sm">Your rating</Title>
      <Rating defaultValue={0} size="lg"/>

      <Textarea
      label="Your review" size="sm"
      placeholder="Do you enjoy eating?"
      rows={3}
      my="sm"
      />

      <Button variant="filled" color="orange" size="sm">Submit Review</Button>

      <Divider my="sm"/>

      <Group justify="center">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} size="sm" readOnly/>
      </Group>
      <Text ta="center" c="dimmed" fz="sm">Best pizza in this world. I give you X score.</Text> 
      
      <Divider my="sm"/>

      <Group justify="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} size="sm" readOnly/>
      </Group>
      <Text ta="center" c="dimmed" fz="sm">My favourite part is pepperoni</Text> 

      <Group justify="center">
      <Pagination total={20} color="orange" my="sm"/>
      </Group>
      
      <Text ta="center" my="sm" c="dimmed" fz="15" fw="inherit">
        {/* Copyright © 2024 Pimolnat Kaewboot 660610779 */}
        <Footer 
            year="2024"
            fullName="Pimolnat Kaewboot"
            studentId="660610779"
          />
      </Text>
    </Container>
  );
}
