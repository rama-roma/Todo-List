import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { getById } from '../services/category';
import { Button } from 'antd';

const InfoCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getById(id),
  });


  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
      >
        Back
      </Button>
      <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-900">{data?.data.name}</h1>
      </div>
    </main>
  );
};

export default InfoCategory;
