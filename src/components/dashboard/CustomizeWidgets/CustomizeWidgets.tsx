import { motion } from "framer-motion";
import {
  Clock,
  Download,
  Upload,
} from "lucide-react";

import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";

import type { CustomizeWidgetProps } from "./customize-widgets.types";

const CustomizeWidget = ({
  lastUpdate = "24 minutes ago",
  onImport,
  onExport,
}: CustomizeWidgetProps) => {
  return (
    <motion.div
    className="max-h-30"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Card className='flex flex-row justify-between'>
        <div
          className="
           border-b-2
            mb-5
            flex
            flex-row
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <h3
            className="
              text-lg
              font-semibold
              text-gray-800
            "
          >
            Customize Widget
          </h3>
        </div>

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >
            <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-500
            "
          >
            <Clock
              size={15}
              className="text-gray-400"
            />

            <span>
              Last update {lastUpdate}
            </span>
          </div>
          <Button
            variant="outline"
            onClick={onImport}
            leftIcon={
              <Download size={16} />
            }
          >
            Import
          </Button>

          <Button
            variant="outline"
            onClick={onExport}
            leftIcon={
              <Upload size={16} />
            }
          >
            Export
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default CustomizeWidget;