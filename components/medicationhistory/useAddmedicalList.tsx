
import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';
import { UpdateContext } from '../../pages/reserve/Reserve';
import { useUser } from "@auth0/nextjs-auth0/client";


export const useAddMedicalList = () => {
  const [medicalList, setMedicalList] = useState<any>({});
  const {updata, setUpdata}= useContext(UpdateContext)
  const { user } = useUser();
  useEffect(() => {
    fetch()
  },[updata])

  const fetch = async () => {
    let {data: list, error } = await supabase
      .from('medicinehistory')
      .select('*')
      .eq("name", user?.name)
      console.log("読み込み")
      console.log(list)
      if(error) {
        console.log(error)
      } else {
        setMedicalList(list);
        console.log(typeof(list))
      }

    
  }

  return {medicalList, fetch};
}
