import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
export default function Page() {
  return (
    <div>
      <h1>Multi-Tenant Eco</h1>
      <p>Welcome to the multi-tenant eco application!</p>
      <Button >
        Get started
      </Button>
      <p>
        This is a simple example of a multi-tenant application using Next.js and
        TypeScript.
      </p>
      <Calendar/>
      <p>
        Feel free to explore the features of this application!
      </p>
    </div>
  );
}