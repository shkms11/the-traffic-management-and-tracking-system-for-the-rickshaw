import { useGetRickshawsQuery } from "../../rickshaws/api/rickshawApi";
import { aiDispatch } from "../utils/aiDispatch";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DispatchPanel() {
  const { data } = useGetRickshawsQuery();
  const [result, setResult] = useState<any>(null);

  const runAI = () => {
    if (!data) return;
    const res = aiDispatch(data);
    setResult(res);
  };

  return (
    <Card className="p-4 space-y-4">
      <h2 className="font-semibold">AI Dispatch System</h2>

      <Button onClick={runAI}>Run Optimization</Button>

      {result && (
        <div className="text-sm space-y-1">
          <p>Recommended Rickshaw: #{result.recommendedId}</p>
          <p className="text-gray-500">{result.reason}</p>
        </div>
      )}
    </Card>
  );
}
