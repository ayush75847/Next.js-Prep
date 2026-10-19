import React from "react";
import Card from "@/components/Card";
import Link from "next/link";

function Notifications() {
  return (
    <Card>
      <div>
        <h1> Notifications</h1>
        <Link href="/complex-dash/archieved" className="text-blue-500"> Archieved</Link>
      </div>
    </Card>
  );
}

export default Notifications;
