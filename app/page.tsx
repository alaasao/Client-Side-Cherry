import Image from "next/image";
import '@mantine/core/styles.css';
import { Button, MantineProvider } from "@mantine/core";
import { Button as But } from "@/components/ui/button";
export default function Home() {
  return (
    <div className=" min-h-screen bg-black">
      <MantineProvider>
        <Button>Hello</Button>
      </MantineProvider>
      <But>Hello</But>
    </div>
  );
}
