<?php
    header('Access-Control-Allow-Origin: *');
    function result($result){
        $arr = array();
        if ($result->num_rows > 0) {
            // 输出每行数据
            while($row = $result->fetch_assoc()) {
                $arr[] = $row;
            }
        } else {
            echo "0 个结果";
        }
        return $arr;
    }
    function row($result){
        $row = $result->fetch_array();
        return $row;
    }
    // 连接数据库名称
    $mysql_conf = array(
        'host'    => '127.0.0.1', 
        'db'      => 'heilongjiang', 
        'db_user' => 'root', 
        'db_pwd'  => '', 
        );
    $mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);
    //诊断连接错误
    if ($mysqli->connect_errno) {
        die("could not connect to the database:\n" . $mysqli->connect_error);
    }
    $mysqli->query("set names 'utf8';");
    //连接数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);
    if (!$select_db) {
        die("could not connect to the db:\n" .  $mysqli->error);
    }
    $sql = "select * from user";
    $res = $mysqli->query($sql);
    $rs = result($res);
    echo json_encode($rs);
?>










