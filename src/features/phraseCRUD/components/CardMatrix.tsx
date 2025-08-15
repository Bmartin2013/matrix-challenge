import { memo } from "react";
import { CardMatrixProps } from "../typings/card-matrix.component";
import { CardItem } from "./CardItem";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export const CardMatrix = memo(
  ({ cards, onDelete, deletingId, errorDelete }: CardMatrixProps) => {
    return (
      <Box marginX="2rem">
        <Box className="card-grid">
          <AnimatePresence mode="popLayout">
            {cards.map((card) => (
              <motion.div
                id={card.id}
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CardItem
                  card={card}
                  deletingId={deletingId}
                  errorDelete={errorDelete}
                  onDelete={onDelete}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Box>
    );
  }
);
