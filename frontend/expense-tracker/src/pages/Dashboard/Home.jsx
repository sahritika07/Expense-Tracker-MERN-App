import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setloading] = useState(false)

  const fetchDashboardData = async() => {
    if(loading) return;
    setloading(true)

  try {
    const response = await axiosInstance.get(
      `${API_PATHS.DASHBOARD.GET_DATA}`
    );

    if(response.data){
      setDashboardData(response.data)
    }
  } catch (error) {
    console.log("Something went wrong. Please try again", error)
  } finally {
    setloading(false);
  }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  } , [])
  return (
    <DashboardLayout activeMenu = "Dashboard">
      <div className="my-5 mx-auto">Home</div>

    </DashboardLayout>
  )
}

export default Home;
