<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');
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
    $user_id = $_POST['user_id'];
    $scenery_id = $_POST['scenery_id'];
    $sql = "delete from collection where user_id=$user_id and scenery_id=$scenery_id";
    $result = $mysqli->query($sql);
    if ($result === TRUE){
      $arr = array('status' => 1, 'msg' => '取消成功');
      echo json_encode($arr);
    } 
    else {
      $arr = array('status' => 0, 'msg' => '取消失败');
      echo json_encode($arr);
    }
?>










