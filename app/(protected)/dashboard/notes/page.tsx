"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const supabase = createClient();

  useEffect(() => {
    getData();
    getUser();
  }, []);

  const getData = async () => {
    const { data: notes } = await supabase.from("notes").select();
    setNotes(notes);
  };

  const getUser = async () => {
    const { data: user } = await supabase.auth.getUser();
    setUser(user);
  };

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  return (
    <>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
