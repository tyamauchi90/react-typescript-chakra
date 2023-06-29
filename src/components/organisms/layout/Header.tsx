// eslint-disable-next-line react-hooks/exhaustive-deps
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigation = useNavigate();

  const onClickHome = useCallback(() => navigation("/home"), []);
  const onClickUserManagement = useCallback(
    () => navigation("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => navigation("/home/setting"), []);
  const onClickLogout = useCallback(() => navigation("/"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Box px={4}>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
          <Box px={4}>
            <Link onClick={onClickLogout}>ログアウト</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});
