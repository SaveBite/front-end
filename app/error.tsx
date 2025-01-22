"use client";

import Link from "next/link";

function Error() {
  return (
    <div>
      <span>something went wrong</span>
      <Link href="/">go to home</Link>
    </div>
  );
}

export default Error;
